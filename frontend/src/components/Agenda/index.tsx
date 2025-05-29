/* eslint-disable @typescript-eslint/no-explicit-any */
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import type { EventInput } from "@fullcalendar/core";
import { useEffect, useState } from "react";
import api from "@/services/api";
import type { Consulta } from "@/types/consulta";
import Modal from "../Modal";
import useAuth from "@/hooks/useAuthContext";
import { Button } from "../ui/button";
import { useNavigate } from "react-router";

type ConsultaEvent = EventInput & {
  extendedProps: {
    consultaId: string;
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
  const { user } = useAuth();

  const navigate = useNavigate();

  useEffect(() => {
    async function fetchConsultas() {
      const query = user?.role === "medico" ? `medicoId=${user.id}` : "";

      try {
        if (!dataInfo) return;

        const response = await api.get(
          `/consultas?${query}&dataInicio=${dataInfo.start}&dataFim=${dataInfo.end}&status=agendado`
        );

        const data = await response.data;

        const mappedEvents: ConsultaEvent[] = data.consultas.map(
          (consulta: Consulta) => ({
            title: `Consulta: ${consulta.paciente.user.name}`,
            start: consulta.date_time,
            extendedProps: {
              consultaId: consulta.id,
              medico: consulta.medico.user.name,
              paciente: consulta.paciente.user.name,
              telefone: consulta.paciente.user.phone,
              email: consulta.paciente.user.email,
            },
          })
        );

        setEvents(mappedEvents);
      } catch (error) {
        console.error(error);
      }
    }
    fetchConsultas();
  }, [dataInfo]);

  const handleEventClick = (info: any) => {
    const props = info.event.extendedProps as ConsultaEvent["extendedProps"];
    setSelectedEvent({
      title: info.event.title,
      start: info.event.startStr,
      extendedProps: props,
    });
    setIsDialogOpen(true);
  };

  return (
    <div className="p-4">
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        weekends={false}
        locale="pt-br"
        eventTimeFormat={{
          hour: "2-digit",
          minute: "2-digit",
          meridiem: false,
        }}
        events={events}
        eventClick={handleEventClick}
        eventMouseEnter={(e) => e.el.classList.add("cursor-pointer")}
        datesSet={(info) => {
          setDataInfo({
            start: info.startStr.split("T")[0],
            end: info.endStr.split("T")[0],
          });
        }}
      />

      <Modal
        open={isDialogOpen}
        onOpenChange={setIsDialogOpen}
        title="Detalhes da Consulta"
        description={
          selectedEvent ? undefined : "Carregando dados da consulta..."
        }
        footer={
          <Button
            className="cursor-pointer"
            onClick={() =>
              navigate(`/dashboard/consulta/${selectedEvent?.extendedProps.consultaId}`)
            }
          >
            Ver mais
          </Button>
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
              <strong>Data:</strong>{" "}
              {new Date(String(selectedEvent.start)).toLocaleString("pt-BR")}
            </p>
          </div>
        )}
      </Modal>
    </div>
  );
}
