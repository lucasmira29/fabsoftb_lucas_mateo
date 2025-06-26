import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import useAuth from '@/hooks/useAuthContext';
import { motion } from 'framer-motion';
import { format, startOfDay } from 'date-fns';
import { ptBR } from 'date-fns/locale/pt-BR';
import api from '@/services/api';
import { AlertaHorarioPendente } from '@/components/AlertaHorarioPendente';

interface Consulta {
  id: string;
  date_time: string;
  status: string;
  paciente: {
    user: {
      name: string;
      phone: string;
      email: string;
    };
  };
  medico: {
    specialty: string;
    user: {
      name: string;
      phone: string;
      email: string;
    };
  };
}

function DashboardHome() {
  const { user } = useAuth();
  const [consultasHoje, setConsultasHoje] = useState<Consulta[]>([]);
  const [consultasRealizadas, setConsultasRealizadas] = useState<number | null>(0);
  const [totalConsultas, setTotalConsultas] = useState<number>(0);
  const [totalRealizadas, setTotalRealizadas] = useState<number>(0);
  const [totalCanceladas, setTotalCanceladas] = useState<number>(0);
  
  const [horarioPendente, setHorarioPendente] = useState(false);

  useEffect(() => {
    if (!user?.id) return;

    const verificarHorarioMedico = async () => {
      try {
        const response = await api.get(`/horarios/medico/${user.id}`);
        if (response.data.length === 0) {
          setHorarioPendente(true);
          toast.warn('Ação necessária: Por favor, defina seu horário de trabalho.');
        }
      } catch (error) {
        console.error('Erro ao verificar horário do médico:', error);
      }
    };

    const hojeInicio = startOfDay(new Date()).toISOString();

    const fetchConsultas = async () => {
      try {
        let res;

        if (user.role === 'medico') {
          verificarHorarioMedico();
          res = await api.get(`consultas/?medicoId=${user.id}&data=${hojeInicio}`);
          const totalRealizadas = await api.get(`consultas?medicoId=${user.id}&status=realizado`);
          setConsultasRealizadas(totalRealizadas.data.total);
        } else if (user.role === 'recepcionista' || user.role === 'admin') {
          res = await api.get(`consultas/?data=${hojeInicio}`);
        }

        if (res) setConsultasHoje(res.data.consultas || []);
      } catch (error) {
        console.error('Erro ao buscar consultas:', error);
      }
    };

    const fetchTotais = async () => {
      try {
        const [resTotal, resRealizadas, resCanceladas] = await Promise.all([
          api.get('/consultas/'),
          api.get('/consultas/?status=realizado'),
          api.get('/consultas/?status=cancelado'),
        ]);
        setTotalConsultas(resTotal.data.total);
        setTotalRealizadas(resRealizadas.data.total);
        setTotalCanceladas(resCanceladas.data.total);
      } catch (error) {
        console.error('Erro ao buscar totais:', error);
      }
    };

    fetchConsultas();

    if (user.role === 'recepcionista' || user.role === 'admin') {
      fetchTotais();
    }
  }, [user]);

  if (!user) {
    return (
      <h2 className="text-3xl text-center font-bold mt-10 text-red-600">
        Você não está logado no sistema.
      </h2>
    );
  }

  const getGreetingByRole = (role: string) => {
    switch (role) {
      case 'admin':
        return 'Bem-vindo(a), Administrador(a)';
      case 'medico':
        return 'Bem-vindo(a), Doutor(a)';
      case 'recepcionista':
        return 'Bem-vindo(a), Recepcionista';
      default:
        return 'Bem-vindo(a)';
    }
  };

  const dataHojeFormatada = format(new Date(), "EEEE, dd 'de' MMMM 'de' yyyy", {
    locale: ptBR,
  });

  return (
    <section className="flex flex-col min-h-screen">
      <div>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, scale: { type: 'spring', bounce: 0.5 } }}
          className="p-8 max-w-xl mx-auto bg-white rounded-2xl shadow-lg mt-10 text-center"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            {getGreetingByRole(user.role)} 👋
          </h2>
          <p className="text-xl text-gray-600">
            Que bom ter você aqui,{' '}
            <span className="font-semibold">{user.name}</span>!
          </p>
        </motion.div>
        
        {horarioPendente && <AlertaHorarioPendente />}

        {(user.role === 'medico' || user.role === 'recepcionista' || user.role === 'admin') && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="p-8 max-w-xl mx-auto bg-white rounded-2xl shadow-lg mt-6"
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              📅 Hoje é {dataHojeFormatada}
            </h3>
            <div>
              <h4 className="text-lg font-semibold text-gray-700 mt-4 mb-2">
                Consultas de hoje:
              </h4>
              {consultasHoje.length > 0 ? (
                <ul className="space-y-3 text-left">
                  {consultasHoje.map((consulta) => (
                    <li key={consulta.id} className="border rounded-xl p-4 shadow-sm hover:shadow-md transition">
                      <p>
                        <strong>
                          🕐 {format(new Date(consulta.date_time), 'HH:mm')}
                        </strong>{' '} - {consulta.paciente.user.name}
                      </p>
                      {user.role !== 'medico' && (
                        <p className="text-md capitalize text-gray-700">
                          <span className="font-semibold text-gray-800">Médico:</span>{' '}
                          {consulta.medico.user.name}
                        </p>
                      )}
                      <p className="text-sm text-gray-500 capitalize">
                        Status: {consulta.status}
                      </p>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-500">Nenhuma consulta agendada para hoje.</p>
              )}
            </div>
          </motion.div>
        )}

        {user.role === 'medico' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="p-6 max-w-xl mx-auto bg-green-50 border border-green-200 rounded-2xl shadow-md mt-6"
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-green-800 mb-1">
                  Consultas Realizadas
                </h3>
              </div>
              <motion.div
                className="text-3xl font-bold text-green-800"
                key={consultasRealizadas}
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 200 }}
              >
                {consultasRealizadas}
              </motion.div>
            </div>
          </motion.div>
        )}

        {(user.role === 'recepcionista' || user.role === 'admin') && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="p-6 max-w-4xl mx-auto bg-white border border-gray-200 rounded-2xl shadow-md mt-6"
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-6 border-b pb-2">
              Resumo Geral de Consultas
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
              <div className="bg-gray-50 p-4 rounded-xl border border-gray-100 shadow-sm">
                <p className="text-sm text-gray-500 mb-1">Total de Consultas</p>
                <p className="text-2xl font-bold text-gray-800">{totalConsultas}</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-xl border border-gray-100 shadow-sm">
                <p className="text-sm text-gray-500 mb-1">Realizadas</p>
                <p className="text-2xl font-bold text-green-700">{totalRealizadas}</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-xl border border-gray-100 shadow-sm">
                <p className="text-sm text-gray-500 mb-1">Canceladas</p>
                <p className="text-2xl font-bold text-red-600">{totalCanceladas}</p>
              </div>
            </div>
          </motion.div>
        )}

        {user.role === 'admin' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="p-6 max-w-xl mx-auto bg-blue-50 border border-blue-200 rounded-2xl shadow-md mt-6"
          >
            <h3 className="text-lg font-semibold text-blue-800 mb-2">
              Painel do Administrador
            </h3>
            <p className="text-gray-700 text-sm">
              Aqui você poderá em breve validar os cadastros de médicos e recepcionistas.
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}

export default DashboardHome;