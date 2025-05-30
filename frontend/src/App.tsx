import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router";
import { ToastContainer } from "react-toastify";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import DashboardPage from "./pages/DashboardPage";
import { AuthProvider } from "./contexts/AuthContext/AuthProvider";
import { getToken } from "./utils/handleToken";
import Agenda from "./components/Agenda";
import ScheduleForm from "./features/Schedule/ScheduleForm";
import ConsultaDetails from "./features/Consulta/ConsultaDetails";
import AccountDetails from "./features/Account/AccountDetails";


function App() {
  const isAuthenticated = getToken();

  return (
    <Router>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={true}
        theme="dark"
      />
      <AuthProvider>
        <Routes>
          <Route
            path="/"
            element={
              isAuthenticated ? (
                <Navigate to="/dashboard" />
              ) : (
                <Navigate to="/login" />
              )
            }
          />

          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<SignUp />} />
          <Route path="/dashboard" element={<DashboardPage />} >
            <Route  path="/dashboard/agenda" element={< Agenda/>}/>
            <Route  path="/dashboard/schedule" element={< ScheduleForm />}/>
            <Route  path="/dashboard/consulta/:id" element={<ConsultaDetails />}/>
            <Route path="/dashboard/account" element={<AccountDetails />} />
          </Route>

          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
