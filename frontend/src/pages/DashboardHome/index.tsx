import useAuth from '@/hooks/useAuthContext';
import { motion } from 'motion/react';

function DashboardHome() {
  const { user } = useAuth();

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

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.4,
        scale: { type: 'spring', visualDuration: 0.4, bounce: 0.5 },
      }}
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
  );
}

export default DashboardHome;
