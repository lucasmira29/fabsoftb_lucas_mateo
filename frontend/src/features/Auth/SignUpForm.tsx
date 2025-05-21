import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectGroup,
} from "@/components/ui/select";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { cpf } from 'cpf-cnpj-validator';
import { Link, useNavigate } from "react-router";
import api from "@/services/api";
import type { Role, User } from "@/types/user";
import { useState } from "react";
import { toast } from "react-toastify";

const formSchema = z.object({
  name: z.string().min(3, "Nome é obrigatório"),
  email: z.string().email("E-mail inválido"),
  password: z.string().min(6, "Mínimo de 6 caracteres"),
 document: z
    .string()
    .min(11, "CPF é obrigatório")
    .transform((val) => val.replace(/[.-]/g, ""))
    .refine((val) => cpf.isValid(val), {
      message: "CPF inválido",
    }),
  birthdate: z.string(),
  phone: z.string().optional(),
  postal_code: z.string(),
  specialty: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;


function SignUpForm({ className, ...props }: React.ComponentProps<"div">) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const [role, setRole] = useState<Role>();
  const navigate = useNavigate();

  const onSubmit = async (data: FormData) => {
    const userData : User = {
      ...data,
      birthdate: new Date(data.birthdate),
    };

    const endpoint = role === "medico" ? "/medicos" : "/recepcionistas";

    try {
      const response = await api.post(endpoint, userData);
      toast.success("Cadastro realizado com sucesso!");
      reset();
      navigate("/login");
      console.log(response.data);
    } catch (error : any) {
      if (error.response) {
        toast.error(error.response.data.message);
      } else {
        console.error(error)
      }
    }
  };

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle>Cadastro</CardTitle>
          <CardDescription>
            Preencha os dados abaixo para criar sua conta
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-6"
          >
            <div className="grid gap-3">
              <Label htmlFor="name">Nome completo</Label>
              <Input
                id="name"
                type="text"
                placeholder="Digite seu nome"
                {...register("name")}
              />
              {errors.name && (
                <p className="text-sm text-red-500">{errors.name.message}</p>
              )}
            </div>

            <div className="grid gap-3">
              <Label htmlFor="email">E-mail</Label>
              <Input
                id="email"
                type="email"
                placeholder="Digite seu email"
                {...register("email")}
              />
              {errors.email && (
                <p className="text-sm text-red-500">{errors.email.message}</p>
              )}
            </div>

            <div className="grid gap-3">
              <Label htmlFor="password">Senha</Label>
              <Input
                id="password"
                type="password"
                placeholder="Digite sua senha"
                {...register("password")}
              />
              {errors.password && (
                <p className="text-sm text-red-500">
                  {errors.password.message}
                </p>
              )}
            </div>

            <div className="grid gap-3">
              <Label htmlFor="document">CPF</Label>
              <Input
                id="document"
                type="text"
                placeholder="Digite seu CPF"
                {...register("document")}
              />
              {errors.document && (
                <p className="text-sm text-red-500">
                  {errors.document.message}
                </p>
              )}
            </div>

            <div className="grid gap-3">
              <Label htmlFor="birthdate">Data de nascimento</Label>
              <Input id="birthdate" type="date" {...register("birthdate")} />
              {errors.birthdate && (
                <p className="text-sm text-red-500">
                  {errors.birthdate.message}
                </p>
              )}
            </div>

            <div className="grid gap-3">
              <Label htmlFor="phone">Telefone</Label>
              <Input
                id="phone"
                type="tel"
                placeholder="Digite seu telefone"
                {...register("phone")}
              />
              {errors.phone && (
                <p className="text-sm text-red-500">{errors.phone.message}</p>
              )}
            </div>

            <div className="grid gap-3">
              <Label htmlFor="postal_code">CEP</Label>
              <Input
                id="postalCode"
                type="text"
                placeholder="Digite seu CEP"
                {...register("postal_code")}
              />
              {errors.postal_code && (
                <p className="text-sm text-red-500">
                  {errors.postal_code.message}
                </p>
              )}
            </div>

            <div className="grid gap-3">
              <Label>Função</Label>
              <Select
                onValueChange={(value) => setRole(value as Role)}
                required
              >
                <SelectTrigger>
                  <SelectValue placeholder="Selecione sua função" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="medico">Médico</SelectItem>
                    <SelectItem value="recepcionista">Recepcionista</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>

            {role === "medico" && (
              <div className="grid gap-3">
                <Label htmlFor="specialty">Especialidade</Label>
                <Input
                  id="specialty"
                  type="text"
                  placeholder="Digite sua especialidade"
                  {...register("specialty")}
                />
              </div>
            )}

            <Button type="submit" className="w-full cursor-pointer">
              Cadastrar
            </Button>

            <div className="mt-4 text-center text-sm">
              Já possui uma conta?{" "}
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

export default SignUpForm;
