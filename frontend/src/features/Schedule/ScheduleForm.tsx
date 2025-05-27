import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import SearchInput from "@/components/SearchInput";
import { useState } from "react";

function ScheduleForm() {
  const [pacienteId, setPacienteId] = useState<string>("");
  const [medicoId, setMedicoId] = useState<string>("");

  return (
    <div className="flex flex-col items-center px-4">
      <h2 className="text-xl font-semibold mb-6 text-center">
        Agendar Consulta
      </h2>
      <form className="flex flex-col gap-4 w-full max-w-md">
        <div className="flex flex-col gap-1">
          <Label htmlFor="paciente">Paciente</Label>
          <SearchInput
            SearchRole="pacientes"
            placeholder="Digite o nome do paciente"
            onSelect={(item) => setPacienteId(item.id)}
          />
        </div>

        <div className="flex flex-col gap-1">
          <Label htmlFor="medico">Médico</Label>
          <SearchInput
            SearchRole="medicos"
            placeholder="Digite o nome do médico"
            onSelect={(item) => setMedicoId(item.id)}
          />
        </div>

        <div className="flex flex-col gap-1">
          <Label htmlFor="data">Data</Label>
          <Input id="data" name="data" type="date" />
        </div>

        <div className="flex flex-col gap-1">
          <Label htmlFor="horario">Horário</Label>
          <Input id="horario" name="horario" type="time" />
        </div>

        <div className="flex flex-col gap-1">
          <Label htmlFor="descricao">Descrição</Label>
          <Textarea
            id="descricao"
            name="descricao"
            placeholder="Descreva brevemente a razão da consulta"
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
