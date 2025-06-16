import { Button } from '@/components/ui/button';
import api from '@/services/api';
import type { Consulta } from '@/types/consulta';
import { Pen } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';

function ConsultaDetails() {
  const { id } = useParams();
  const [consulta, setConsulta] = useState<Consulta>();

  useEffect(() => {
    async function fetchConsulta() {
      try {
        const response = await api.get(`/consultas/${id}`);
        setConsulta(response.data);
      } catch (error) {
        console.error();
      }
    }
    fetchConsulta();
  }, []);



  return (
    consulta && (
      <div className="max-w-xl mx-auto mt-8 p-6 border rounded-lg shadow-sm bg-white">
        <h1 className="text-2xl font-semibold mb-4">Detalhes da Consulta</h1>

        <div className="space-y-4 text-sm text-muted-foreground">
          <div>
            <h2 className="text-lg font-medium text-black">
              Informações Gerais
            </h2>
            <p>
              <strong>Data:</strong> {consulta?.date_time}
            </p>
            <p>
              <strong>Status:</strong> {consulta?.status}
            </p>
          </div>

          <div>
            <h2 className="text-lg font-medium text-black">Paciente</h2>
            <p>
              <strong>Nome:</strong> {consulta?.paciente.user.name}
            </p>
            <p>
              <strong>Telefone:</strong> {consulta?.paciente.user.phone}
            </p>
            <p>
              <strong>Email:</strong> {consulta?.paciente.user.email}
            </p>
            {consulta?.paciente.history && (
              <p>
                <strong>Histórico:</strong> {consulta.paciente.history}
              </p>
            )}
            {consulta?.paciente.allergies && (
              <p>
                <strong>Alergias:</strong> {consulta.paciente.allergies}
              </p>
            )}
          </div>

          <div>
            <h2 className="text-lg font-medium text-black">Médico</h2>
            <p>
              <strong>Nome:</strong> {consulta?.medico.user.name}
            </p>
            <p>
              <strong>Especialidade:</strong> {consulta?.medico.specialty}
            </p>
            <p>
              <strong>Telefone:</strong> {consulta?.medico.user.phone}
            </p>
            <p>
              <strong>Email:</strong> {consulta?.medico.user.email}
            </p>
          </div>
        </div>

        <div className="flex justify-end gap-4 mt-8">
          <Button
            variant="secondary"
            className="flex items-center gap-2 px-4 py-2 text-sm font-medium cursor-pointer"
          >
            <Pen className="w-4 h-4" />
            Editar
          </Button>
        </div>
      </div>
    )
  );
}

export default ConsultaDetails;
