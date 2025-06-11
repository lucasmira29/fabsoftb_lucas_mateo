import UserCard from '@/components/UserCard';
import api from '@/services/api';
import type { Medico } from '@/types/medico';
import { useEffect, useState } from 'react';

function MedicosPage() {
  const [medicoData, setMedicoData] = useState<Medico[] | undefined>(undefined);
  const [pagination, setPagination] = useState(false);

  useEffect(() => {
    async function fetchMedicos() {
      try {
        const response = await api.get('/medicos');
        if (response.data.totalPages > 1) setPagination(true);
        setMedicoData(response.data.medicos);
      } catch (error) {
        console.error(error);
      }
    }

    fetchMedicos();
  }, []);

  return (
    <div className="flex gap-5 justify-center items-center">
      {medicoData?.map((medico) => (
        <UserCard key={medico.id} medicoData={medico} />
      ))}
    </div>
  );
}

export default MedicosPage;
