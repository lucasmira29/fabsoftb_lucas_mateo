import { Routes, Route, Navigate } from "react-router";
import useAuth from "@/hooks/useAuthContext";

import Login from "@/pages/Login";
import SignUp from "@/pages/SignUp";
import Agenda from "@/components/Agenda";
import ScheduleForm from "@/features/Schedule/ScheduleForm";
import ConsultaDetails from "@/features/Consulta/ConsultaDetails";
import AccountDetails from "@/features/Account/AccountDetails";
import DefaultLayout from "@/layouts/DefaultLayout";
import DashboardHome from "@/pages/DashboardHome";
import MedicosPage from "@/pages/Medicos";

function AppRoutes() {
  const { user, isLoading } = useAuth();

  if (isLoading) return <p>Carregando...</p>;

  return (
    <Routes>
      <Route
        path="/"
        element={user ? <Navigate to="/dashboard" /> : <Navigate to="/login" />}
      />
      <Route path="/login" element={<Login />} />
      <Route path="/cadastro" element={<SignUp />} />

      <Route
        path="/dashboard"
        element={user ? <DefaultLayout /> : <Navigate to="/login" />}
      >
        <Route path="home" element={<DashboardHome />}/>
        <Route path="agenda" element={<Agenda />} />
        <Route path="schedule" element={<ScheduleForm />} />
        <Route path="consulta/:id" element={<ConsultaDetails />} />
        <Route path="account" element={<AccountDetails />} />
        <Route path="medicos" element={<MedicosPage />}/>
      </Route>

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default AppRoutes;
