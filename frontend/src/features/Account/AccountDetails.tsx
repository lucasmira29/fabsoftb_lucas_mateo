import { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Pen, Save } from 'lucide-react';
import type { User } from '@/types/user';
import api from '@/services/api';
import useAuth from '@/hooks/useAuthContext';
import { setToken } from '@/utils/handleToken';

function AccountDetails() {
  const [isEditing, setIsEditing] = useState(false);
  const [originalUserData, setOriginalUserData] = useState<User | null>(null);
  const [user, setUser] = useState<User>();
  const [name, setName] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [phone, setPhone] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [specialty, setSpecialty] = useState<string | null>('');

  const userContext = useAuth();

  useEffect(() => {
    async function fetchUser() {
      if (!userContext.user?.id) return;

      try {
        const response = await api.get(`/usuarios/${userContext.user.id}`);
        const data = response.data;
        setUser(data);
        setOriginalUserData(data);
        setName(data.name);
        setBirthdate(data.birthdate?.slice(0, 10));
        setPhone(data.phone || '');
        setPostalCode(data.postal_code);
        setSpecialty(data.specialty || '');
      } catch (error) {
        console.error(error);
      }
    }

    fetchUser();
  }, [userContext.user?.id]);

  async function updateUser() {
    if (!userContext.user) return;
    const role = userContext.user.role;
    let endpoint;
    switch (role) {
      case 'medico':
        endpoint = 'medicos';
        break;
      case 'recepcionista':
        endpoint = 'recepcionistas';
        break;
      default:
        endpoint = 'usuarios/admin';
        break;
    }

    const payload: any = {
      name,
      birthdate: new Date(birthdate),
      phone,
      postal_code: postalCode,
    };

    if (role === 'medico') payload.specialty = specialty;

    try {
      const response = await api.put(
        `/${endpoint}/${userContext.user.id}`,
        payload
      );

      userContext.setUser({
        id: response.data.user.id,
        name: response.data.user.name,
        document: response.data.user.document,
        email: response.data.user.email,
        role: response.data.user.role,
      });

      setToken(response.data.token);
      setIsEditing(false);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    user && (
      <Card className="max-w-2xl mx-auto mt-8">
        <CardHeader>
          <CardTitle>Detalhes da Conta</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="nome">Nome completo</Label>
            <Input
              id="nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
              disabled={!isEditing}
            />
          </div>

          <div>
            <Label htmlFor="email">E-mail</Label>
            <Input id="email" type="email" value={user.email} disabled />
          </div>

          <div>
            <Label htmlFor="documento">CPF</Label>
            <Input id="documento" value={user.document} disabled />
          </div>

          <div>
            <Label htmlFor="birthdate">Data de nascimento</Label>
            <Input
              id="birthdate"
              type="date"
              value={birthdate}
              onChange={(e) => setBirthdate(e.target.value)}
              disabled={!isEditing}
            />
          </div>

          <div>
            <Label htmlFor="telefone">Telefone</Label>
            <Input
              id="telefone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              disabled={!isEditing}
            />
          </div>

          <div>
            <Label htmlFor="postal_code">CEP</Label>
            <Input
              id="postal_code"
              value={postalCode}
              onChange={(e) => setPostalCode(e.target.value)}
              disabled={!isEditing}
            />
          </div>

          {userContext.user?.role === 'medico' && (
            <div>
              <Label htmlFor="especialidade">Especialidade</Label>
              <Input
                id="especialidade"
                value={specialty || ''}
                onChange={(e) => setSpecialty(e.target.value)}
                disabled={!isEditing}
              />
            </div>
          )}

          <div className="flex justify-end gap-5">
            {isEditing && (
              <Button
                variant="destructive"
                className="cursor-pointer"
                onClick={() => {
                  if (originalUserData) {
                    setName(originalUserData.name);
                    setBirthdate(originalUserData.birthdate?.slice(0, 10));
                    setPhone(originalUserData.phone || '');
                    setPostalCode(originalUserData.postal_code);
                    setSpecialty(originalUserData.specialty || '');
                  }
                  setIsEditing(false);
                }}
              >
                Cancelar
              </Button>
            )}
            <Button
              className={
                isEditing
                  ? 'cursor-pointer bg-green-500 hover:bg-green-400'
                  : 'cursor-pointer'
              }
              onClick={isEditing ? updateUser : () => setIsEditing(true)}
            >
              {isEditing ? (
                <>
                  <Save className="w-4 h-4 mr-2" />
                  Salvar
                </>
              ) : (
                <>
                  <Pen className="w-4 h-4 mr-2" />
                  Editar
                </>
              )}
            </Button>
          </div>
        </CardContent>
      </Card>
    )
  );
}

export default AccountDetails;
