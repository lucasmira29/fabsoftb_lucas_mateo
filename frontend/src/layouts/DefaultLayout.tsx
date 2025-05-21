import type { ReactNode } from 'react';

type Props = {
  children: ReactNode,
}

function DefaultLayout({ children  } : Props) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="w-full bg-white shadow px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-gray-800">
          Sistema de Agendamento
        </h1>
      </header>

      <main className="flex-1 p-6 bg-gray-50">{children}</main>
    </div>
  );
}

export default DefaultLayout;
