import DefaultLayout from '@/layouts/DefaultLayout';
import { jwtDecode } from 'jwt-decode';
import { useEffect, useState } from 'react';

type CustomJwtPayload = {
  id: number;
  name: string;
  email: string;
  role: string;
};

function DashboardPage() {
  const [userData, setUserData] = useState<CustomJwtPayload>();

  useEffect(() => {
    const token = sessionStorage.getItem('token');
    if (token) {
      try {
        const decoded = jwtDecode<CustomJwtPayload>(token);
        setUserData(decoded);
      } catch (error) {
        console.error('Token inválido:', error);
      }
    }
  }, []);

  if (!userData) {
    return (
      <DefaultLayout>
        <div className="p-8 text-center">
          <h2 className="text-2xl font-semibold text-gray-700">Nenhum usuário logado</h2>
        </div>
      </DefaultLayout>
    );
  }

  return (
    <DefaultLayout>
      <div className="p-8 max-w-xl mx-auto bg-white rounded-2xl shadow-md">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">Bem-vindo(a)!</h2>
        <div className="space-y-3 text-lg text-gray-700">
          <p><span className="font-semibold">Nome:</span> {userData.name}</p>
          <p><span className="font-semibold">E-mail:</span> {userData.email}</p>
          <p><span className="font-semibold">ID:</span> {userData.id}</p>
          <p><span className="font-semibold">Função:</span> {userData.role}</p>
        </div>
      </div>
    </DefaultLayout>
  );
}

export default DashboardPage;
