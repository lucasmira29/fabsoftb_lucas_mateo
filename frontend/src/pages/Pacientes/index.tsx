import UserCard from '@/components/UserCard';
import api from '@/services/api';
import type { Paciente } from '@/types/paciente';
import { useEffect, useState } from 'react';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';

function PacientesPage() {
  const [pacienteData, setPacienteData] = useState<Paciente[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    async function fetchPacientes() {
      try {
        const response = await api.get(`/pacientes?page=${page}&limit=9`);
        setPacienteData(response.data.pacientes);
        setTotalPages(response.data.totalPages);
      } catch (error) {
        console.error(error);
      }
    }

    fetchPacientes();
  }, [page]);

  const pageLinks = [];

  for (let i = 1; i <= totalPages; i++) {
    const pageNumber = i;
    pageLinks.push(
      <PaginationItem key={pageNumber}>
        <PaginationLink
          href="#"
          isActive={page === pageNumber}
          onClick={(e) => {
            e.preventDefault();
            setPage(pageNumber);
          }}
        >
          {pageNumber}
        </PaginationLink>
      </PaginationItem>
    );
  }

  return (
    <div className="p-6">
      <div className="flex gap-5 justify-center items-center flex-wrap">
        {pacienteData.map((paciente) => (
          <UserCard key={paciente.id} userData={paciente} />
        ))}
      </div>

      {totalPages > 1 && (
        <div className="flex justify-center mt-6">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    if (page > 1) setPage(page - 1);
                  }}
                />
              </PaginationItem>

              {pageLinks}

              <PaginationItem>
                <PaginationNext
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    if (page < totalPages) setPage(page + 1);
                  }}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      )}
    </div>
  );
}

export default PacientesPage;
