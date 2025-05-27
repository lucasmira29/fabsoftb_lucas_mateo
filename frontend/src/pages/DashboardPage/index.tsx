import useAuth from "@/hooks/useAuthContext";
import DefaultLayout from "@/layouts/DefaultLayout";
import { Outlet } from "react-router";

function DashboardPage() {
  const { user } = useAuth();

  if (!user) {
    return (
      <DefaultLayout>
        <h2 className="text-3xl text-center fontbold mb-6 text-gray-800">
          Você não está logado no sistema.
        </h2>
      </DefaultLayout>
    );
  }

  return (
    <DefaultLayout>
      {/* <div className="p-8 max-w-xl mx-auto bg-white rounded-2xl shadow-md">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">Bem-vindo(a)!</h2>
        <div className="space-y-3 text-lg text-gray-700">
          <p>
            <span className="font-semibold">Nome:</span> {user?.name}
          </p>
          <p>
            <span className="font-semibold">E-mail:</span> {user?.email}
          </p>
          <p>
            <span className="font-semibold">ID:</span> {user?.id}
          </p>
          <p>
            <span className="font-semibold">Função:</span> {user?.role}
          </p>
        </div>
      </div> */}
      <Outlet />
    </DefaultLayout>
  );
}

export default DashboardPage;
