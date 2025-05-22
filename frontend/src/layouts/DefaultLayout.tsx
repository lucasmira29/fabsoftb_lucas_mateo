import { Button } from '@/components/ui/button';
import useAuth from '@/hooks/useAuthContext';
import { useEffect, type ReactNode } from 'react';
import { useNavigate } from 'react-router';

type Props = {
  children: ReactNode,
}

function DefaultLayout({ children  } : Props) {
  const { user, isLoading, logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoading && user === null) {
      navigate("/login");
    }
  }, [user, isLoading, navigate])
  
  return (
    <div className="min-h-screen flex flex-col">
      <header className="w-full bg-white shadow px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-gray-800">
          Sistema de Agendamento
        </h1>
        <Button className="cursor-pointer px-7" onClick={() => logout()}>Sair</Button>
      </header>

      <main className="flex-1 p-6 bg-gray-50">{children}</main>
    </div>
  );
}

export default DefaultLayout;
