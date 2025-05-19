import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectGroup,
} from '@/components/ui/select';
import { Link } from 'react-router';

export function SignUpForm({
  className,
  ...props
}: React.ComponentProps<'div'>) {
  return (
    <div className={cn('flex flex-col gap-6', className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle>Cadastro</CardTitle>
          <CardDescription>
            Preencha os dados abaixo para criar sua conta
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="flex flex-col gap-6">
              <div className="grid gap-3">
                <Label htmlFor="name">Nome completo</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Digite seu nome"
                  required
                />
              </div>

              <div className="grid gap-3">
                <Label htmlFor="email">E-mail</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Digite seu email"
                  required
                />
              </div>

              <div className="grid gap-3">
                <Label htmlFor="password">Senha</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Digite sua senha"
                  required
                />
              </div>

              <div className="grid gap-3">
                <Label htmlFor="document">CPF</Label>
                <Input
                  id="document"
                  type="text"
                  placeholder="Digite seu CPF"
                  required
                />
              </div>

              <div className="grid gap-3">
                <Label htmlFor="birthdate">Data de nascimento</Label>
                <Input id="birthdate" type="date" required />
              </div>

              <div className="grid gap-3">
                <Label htmlFor="phone">Telefone</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="Digite seu telefone"
                  required
                />
              </div>

              <div className="grid gap-3">
                <Label htmlFor="postal_code">CEP</Label>
                <Input
                  id="postal_code"
                  type="text"
                  placeholder="Digite seu CEP"
                  required
                />
              </div>

              <div className="grid gap-3">
                <Label htmlFor="specialty">Função</Label>
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Selecione sua função" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="medico" className="cursor-pointer">
                        Médico
                      </SelectItem>
                      <SelectItem
                        value="recepcionista"
                        className="cursor-pointer"
                      >
                        Recepcionista
                      </SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>

              <Button type="submit" className="w-full cursor-pointer">
                Cadastrar
              </Button>
            </div>
            <div className="mt-4 text-center text-sm">
              Já possui uma conta?{' '}
              <Link to="/login" className="underline underline-offset-4">
                Faça login
              </Link>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
