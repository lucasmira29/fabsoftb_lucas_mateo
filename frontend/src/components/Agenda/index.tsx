/* eslint-disable @typescript-eslint/no-explicit-any */
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import type { EventInput } from '@fullcalendar/core';
import { useEffect, useState } from 'react';
import api from '@/services/api';
import type { Consulta } from '@/types/consulta';
import Modal from '../Modal';
import useAuth from '@/hooks/useAuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useNavigate } from 'react-router';
import './agenda.css';
import { Check } from 'lucide-react';

type ConsultaEvent = EventInput & {
  extendedProps: {
    consultaId: string;
    status: string;
    medico: string;
    paciente: string;
    telefone: string;
    email: string;
  };
};

type dataInfoType = {
  start: string;
  end: string;
};

export default function Agenda() {
  const [events, setEvents] = useState<ConsultaEvent[]>([]);
  const [selectedEvent, setSelectedEvent] = useState<ConsultaEvent | null>(
    null
  );
  const [dataInfo, setDataInfo] = useState<dataInfoType>();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [statusFilter, setStatusFilter] = useState('');
  const [pacienteFilter, setPacienteFilter] = useState('');
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchConsultas() {
      if (!dataInfo) return;

      const query = user?.role === 'medico' ? `medicoId=${user.id}` : '';
      const statusQuery = statusFilter ? `&status=${statusFilter}` : '';

      try {
        const response = await api.get(
          `/consultas?${query}&dataInicio=${dataInfo.start}&dataFim=${dataInfo.end}${statusQuery}`
        );

        const data = await response.data;

        const mappedEvents: ConsultaEvent[] = data.consultas
          .filter((consulta: Consulta) =>
            pacienteFilter
              ? consulta.paciente.user.name
                  .toLowerCase()
                  .includes(pacienteFilter.toLowerCase())
              : true
          )
          .map((consulta: Consulta) => ({
            title: `${consulta.paciente.user.name}`,
            start: consulta.date_time,
            extendedProps: {
              consultaId: consulta.id,
              status: consulta.status,
              medico: consulta.medico.user.name,
              paciente: consulta.paciente.user.name,
              telefone: consulta.paciente.user.phone,
              email: consulta.paciente.user.email,
            },
          }));

        setEvents(mappedEvents);
      } catch (error) {
        console.error(error);
      }
    }

    fetchConsultas();
  }, [dataInfo, statusFilter, pacienteFilter]);

  function renderEventContent(eventInfo: any) {
    const status = eventInfo.event.extendedProps.status;
    const statusColorMap = {
      agendado: 'bg-blue-500',
      realizado: 'bg-green-500',
      cancelado: 'bg-red-500',
    } as const;

    const dotColor =
      statusColorMap[status as keyof typeof statusColorMap] || 'bg-gray-400';

    const hora = new Date(eventInfo.event.start).toLocaleTimeString('pt-BR', {
      hour: '2-digit',
      minute: '2-digit',
    });

    return (
      <div className="flex items-center gap-2 px-1 py-0.5 box-border w-full">
        <span className={`w-2.5 h-2.5 rounded-full shrink-0 ${dotColor}`} />
        <span className="text-[12px] text-gray-600 sm:block hidden">{hora}</span>
        <span className="text-xs md:text-sm font-medium text-gray-800 truncate block max-w-full">
          {eventInfo.event.title}
        </span>
      </div>
    );
  }

  const handleEventClick = (info: any) => {
    const props = info.event.extendedProps as ConsultaEvent['extendedProps'];
    setSelectedEvent({
      title: info.event.title,
      start: info.event.startStr,
      extendedProps: props,
    });
    setIsDialogOpen(true);
  };

  const handleClearFilters = () => {
    setStatusFilter('');
    setPacienteFilter('');
  };

  async function updateConsulta(id: string | undefined) {
    try {
      api.put(`/consultas/${id}`, {
        status: 'realizado',
      });
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="flex flex-col items-center justify-center w-full sm:p-6 p-0">
      <div className="w-full max-w-4xl flex flex-col md:flex-row gap-4 mb-6">
        <Select onValueChange={setStatusFilter} value={statusFilter}>
          <SelectTrigger className="w-full md:w-48">
            <SelectValue placeholder="Filtrar por status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="agendado">Agendado</SelectItem>
            <SelectItem value="realizado">Realizado</SelectItem>
            <SelectItem value="cancelado">Cancelado</SelectItem>
          </SelectContent>
        </Select>

        <Input
          placeholder="Filtrar por paciente"
          value={pacienteFilter}
          onChange={(e) => setPacienteFilter(e.target.value)}
          className="w-full"
        />

        <Button onClick={handleClearFilters} variant="outline">
          Limpar
        </Button>
      </div>

      <div className="w-full max-w-5xl bg-white p-4 rounded-2xl shadow-md overflow-auto">
        <FullCalendar
          plugins={[dayGridPlugin]}
          initialView="dayGridMonth"
          weekends={false}
          locale="pt-br"
          events={events}
          eventContent={renderEventContent}
          buttonText={{
            today: 'Hoje',
            month: 'Mês',
            week: 'Semana',
          }}
          eventClick={handleEventClick}
          eventMouseEnter={(e) => e.el.classList.add('cursor-pointer')}
          datesSet={(info) => {
            setDataInfo({
              start: info.startStr.split('T')[0],
              end: info.endStr.split('T')[0],
            });
          }}
          eventTimeFormat={{
            hour: '2-digit',
            minute: '2-digit',
            meridiem: false,
          }}
          headerToolbar={{
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,dayGridWeek',
          }}
          height="auto"
          contentHeight="auto"
        />
      </div>

      {/* Modal de detalhes */}
      <Modal
        open={isDialogOpen}
        onOpenChange={setIsDialogOpen}
        title="Detalhes da Consulta"
        description={
          selectedEvent ? undefined : 'Carregando dados da consulta...'
        }
        footer={
          <>
            <Button
              onClick={() =>
                navigate(
                  `/dashboard/consulta/${selectedEvent?.extendedProps.consultaId}`
                )
              }
              className="cursor-pointer"
            >
              Ver mais
            </Button>
            <Button
              onClick={() =>
                updateConsulta(selectedEvent?.extendedProps.consultaId)
              }
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium bg-green-500 hover:bg-green-600 text-white cursor-pointer"
            >
              <Check className="w-4 h-4" />
              Confirmar
            </Button>
          </>
        }
      >
        {selectedEvent && (
          <div className="flex flex-col space-y-2 mt-2 text-sm text-muted-foreground">
            <p>
              <strong>Paciente:</strong> {selectedEvent.extendedProps.paciente}
            </p>
            <p>
              <strong>Médico:</strong> {selectedEvent.extendedProps.medico}
            </p>
            <p>
              <strong>Telefone:</strong> {selectedEvent.extendedProps.telefone}
            </p>
            <p>
              <strong>Email:</strong> {selectedEvent.extendedProps.email}
            </p>
            <p>
              <strong>Data:</strong>{' '}
              {new Date(String(selectedEvent.start)).toLocaleString('pt-BR')}
            </p>
          </div>
        )}
      </Modal>
    </div>
  );
}
