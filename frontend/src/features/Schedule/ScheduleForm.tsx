import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import SearchInput from '@/components/SearchInput';
import api from '@/services/api';
import { toast } from 'react-toastify';

function ScheduleForm() {
  const [pacienteId, setPacienteId] = useState<number | null>(null);
  const [medicoId, setMedicoId] = useState<number | null>(null);
  const [data, setData] = useState<string>('');
  const [horario, setHorario] = useState<string>('');
  const [descricao, setDescricao] = useState<string>('');

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!pacienteId || !medicoId) {
      alert('Selecione paciente e médico.');
      return;
    }

    const [year, month, day] = data.split('-');
    const formattedDate = `${day}/${month}/${year}`;
    const formattedDateTime = `${formattedDate} ${horario}`;

    const consultaData = {
      paciente_id: pacienteId,
      medico_id: medicoId,
      date_time: formattedDateTime,
      status: 'agendado',
      description: descricao,
    };

    try {
      const response = await api.post('/consultas', consultaData);
      setData('');
      setHorario('');
      setDescricao('');
      toast.success(response.data.message);
    } catch (error) {
      console.error(error);
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
          <Input
            id="data"
            name="data"
            type="date"
            value={data}
            required
            onChange={(e) => setData(e.target.value)}
          />
        </div>

        <div className="flex flex-col gap-1">
          <Label htmlFor="horario">Horário</Label>
          <Input
            id="horario"
            name="horario"
            type="time"
            value={horario}
            required
            onChange={(e) => setHorario(e.target.value)}
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
