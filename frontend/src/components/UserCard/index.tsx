import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import type { Medico } from '@/types/medico';
import { formatPhone } from '@/utils/formatters';
import { getInitials } from '@/utils/getInitials';

type medicoDataProps = {
  medicoData: Medico;
};


function UserCard({ medicoData }: medicoDataProps) {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <div className="pb-3 flex justify-center">
          <span className="text-center rounded-full bg-gray-100 w-fit p-1">
            {getInitials(medicoData.user.name)}
          </span>
        </div>
        <CardTitle className='text-lg'>{medicoData.user.name}</CardTitle>
        <CardDescription>{medicoData.user.email}</CardDescription>
        <CardDescription>{formatPhone(medicoData.user.phone || '')}</CardDescription>
      </CardHeader>
    </Card>
  );
}

export default UserCard;
