import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import type { Medico } from '@/types/medico';
import type { Paciente } from '@/types/paciente';
import { formatPhone } from '@/utils/formatters';
import { getInitials } from '@/utils/getInitials';

type userDataProps = {
  userData: Medico | Paciente;
};


function UserCard({ userData }: userDataProps) {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <div className="pb-3 flex justify-center">
          <span className="text-center rounded-full bg-gray-100 w-fit p-1">
            {getInitials(userData.user.name)}
          </span>
        </div>
        <CardTitle className='text-lg'>{userData.user.name}</CardTitle>
        <CardDescription>{userData.user.email}</CardDescription>
        <CardDescription>{formatPhone(userData.user.phone || '')}</CardDescription>
      </CardHeader>
    </Card>
  );
}

export default UserCard;
