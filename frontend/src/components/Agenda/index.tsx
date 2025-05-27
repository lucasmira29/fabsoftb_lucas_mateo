import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import type { EventInput } from "@fullcalendar/core";
import { useEffect, useState } from "react";
import api from "@/services/api";
import type { Consulta } from "@/types/consulta";
import Modal from "../Modal";
import useAuth from "@/hooks/useAuthContext";

type ConsultaEvent = EventInput & {
  extendedProps: {
    medico: string;
    paciente: string;
    telefone: string;
    email: string;
  };
};

export default function Agenda() {
  const [events, setEvents] = useState<ConsultaEvent[]>([]);
  const [selectedEvent, setSelectedEvent] = useState<ConsultaEvent | null>(
    null
  );
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { user } = useAuth(); 

  useEffect(() => {
    async function fetchConsultas() {
      const query = user?.role === 'medico' ? `medicoId=${user.id}` : '';

      try {
        const response = await api.get(`/consultas?${query}`);

        const data = await response.data;

        const mappedEvents: ConsultaEvent[] = data.consultas.map(
          (consulta: Consulta) => ({
            title: `Consulta: ${consulta.paciente.user.name}`,
            start: consulta.date_time,
            extendedProps: {
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
  }, []);

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
        events={events}
        eventClick={handleEventClick}
      />

      <Modal
        open={isDialogOpen}
        onOpenChange={setIsDialogOpen}
        consulta={
          selectedEvent
            ? {
                paciente: selectedEvent.extendedProps.paciente,
                medico: selectedEvent.extendedProps.medico,
                telefone: selectedEvent.extendedProps.telefone,
                email: selectedEvent.extendedProps.email,
                data: new Date(String(selectedEvent.start)).toLocaleString("pt-BR"),
              }
            : undefined
        }
      />
    </div>
  );
}
