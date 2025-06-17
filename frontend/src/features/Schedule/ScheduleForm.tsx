import { format } from "date-fns";
import { useEffect, useState } from "react";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import SearchInput from "@/components/SearchInput";
import api from "@/services/api";
import { toast } from "react-toastify";
import SelectInput from "@/components/SelectInput";
import { DatePicker } from "@/components/DatePicker";

function ScheduleForm() {
  const [pacienteId, setPacienteId] = useState<number | null>(null);
  const [medicoId, setMedicoId] = useState<number | null>(null);
  const [date, setDate] = useState<Date | undefined>();
  const [horario, setHorario] = useState<string>("");
  const [descricao, setDescricao] = useState<string>("");
  const [horariosDisponiveis, setHorariosDisponiveis] = useState<string[]>([]);

  useEffect(() => {
    setHorario("");
    setHorariosDisponiveis([]);

    async function fetchHorariosDisponiveis() {
      if (!medicoId || !date) return;

      try {
        const dataFormatada = format(date, "yyyy-MM-dd");
        const response = await api.get(
          `/horarios/disponivel/${medicoId}?data=${dataFormatada}`
        );
        setHorariosDisponiveis(response.data.horarios || []);
      } catch (error) {
        console.error(error);
        setHorariosDisponiveis([]);
      }
    }
    fetchHorariosDisponiveis();
  }, [date, medicoId]);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!pacienteId || !medicoId || !date || !horario) {
      toast.warn("Por favor, preencha todos os campos obrigatórios.");
      return;
    }

    const dataFormatada = format(date, "yyyy-MM-dd");

    const consultaData = {
      paciente_id: pacienteId,
      medico_id: medicoId,
      date_time: new Date(`${dataFormatada}T${horario}:00`).toISOString(),
      status: "agendado",
      description: descricao,
    };

    try {
      const response = await api.post("/consultas", consultaData);
      setDate(undefined);
      setHorario("");
      setDescricao("");
      toast.success(response.data.message);
    } catch (error) {
      console.error(error);
      toast.error("Ocorreu um erro ao agendar a consulta.");
    }
  }

  return (
    <div className="flex flex-col items-center px-4">
      <h2 className="text-xl font-semibold mb-6 text-center">
        Agendar Consulta
      </h2>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 w-full max-w-md"
      >
        <div className="flex flex-col gap-1">
          <Label>Paciente</Label>
          <SearchInput
            SearchRole="pacientes"
            placeholder="Digite o nome do paciente"
            onSelect={(item) => {
              setPacienteId(item.id);
            }}
          />
        </div>

        <div className="flex flex-col gap-1">
          <Label>Médico</Label>
          <SearchInput
            SearchRole="medicos"
            placeholder="Digite o nome do médico"
            onSelect={(item) => setMedicoId(item.id)}
          />
        </div>

        <div className="flex flex-col gap-1">
          <Label htmlFor="data">Data</Label>
          <DatePicker date={date} setDate={setDate} />
        </div>

        <div className="flex flex-col gap-1">
          <Label htmlFor="horario">Horário</Label>
          <SelectInput
            items={horariosDisponiveis}
            placeholder={
              horariosDisponiveis.length > 0
                ? "Selecione um horário"
                : "Selecione uma data e médico"
            }
            onChange={setHorario}
          />
        </div>

        <div className="flex flex-col gap-1">
          <Label htmlFor="descricao">Descrição</Label>
          <Textarea
            id="descricao"
            name="descricao"
            value={descricao}
            placeholder="Descreva brevemente a razão da consulta"
            onChange={(e) => setDescricao(e.target.value)}
            className="bg-white"
          />
        </div>

        <Button type="submit" className="mt-4 w-full cursor-pointer">
          Agendar
        </Button>
      </form>
    </div>
  );
}

export default ScheduleForm;
