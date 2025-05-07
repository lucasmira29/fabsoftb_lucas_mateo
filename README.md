# Fábrica de Software I

## 👨‍💻 Equipe

* Lucas de Mira
* Mateo Motta

---

## 💡 Proposta do Projeto

Sistema para gerenciar o agendamento de consultas dermatológicas com funcionalidades administrativas e assistenciais.

### Funcionalidades Principais

1. Cadastro de Pacientes
2. Cadastro de Profissionais (médicos e recepcionistas)
3. Agendamento de Consultas
4. Visualização de Consultas Agendadas
5. Cancelamento e Reagendamento de Consultas
6. Notificações e Lembretes por E-mail
7. Registro de Consultas e Histórico Médico
8. Pesquisa e Filtro de Consultas
9. Login e Autenticação com Permissões
10. Painel Administrativo

---

## 👤 Histórias de Usuário

1. Cadastro de Pacientes

   * Como Atendente, desejo registrar dados dos pacientes para acompanhamento médico.

2. Painel Administrativo

   * Como Administrador, desejo gerenciar cadastros e horários para manter a organização.

3. Agendamento de Consultas

   * Como Paciente, desejo agendar uma consulta com um médico em data e horário disponíveis.

4. Visualização de Consultas Agendadas

   * Como Paciente ou Médico, desejo visualizar minhas consultas para me organizar.

5. Cancelamento e Reagendamento

   * Como Paciente, desejo cancelar ou reagendar consultas com até 48h de antecedência.

6. Notificações e Lembretes

   * Como Paciente ou Médico, desejo receber lembretes automáticos das consultas.

7. Registro de Consultas e Histórico Médico

   * Como Médico, desejo registrar observações e diagnósticos no histórico do paciente.

8. Pesquisa e Filtro de Consultas

   * Como Atendente, desejo buscar consultas por data, médico ou paciente.

9. Login e Autenticação

   * Como Usuário, desejo acessar com login/senha e permissões específicas por função.

---

## 🗂️ Modelo ER

<div style="text-align: center;">
  <img src="./database_diagram.png" width="800" alt="Diagrama do banco de dados">
</div>

---

## ⚙️ Como Rodar o Projeto

### ▶️ Ambiente Local

1. Acesse a pasta do backend:

   ```bash
   cd backend
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

3. Crie um arquivo .env com base no .envExample:

   ```
   DATABASE_URL=mysql://USER:PASSWORD@HOST:PORT/DATABASE
   ```

4. Execute as migrações:

   ```bash
   npx prisma migrate dev
   ```

5. Inicie o servidor:

   ```bash
   npm start
   ```

---

### 🐳 Usando Docker

1. Acesse a pasta do backend:

   ```bash
   cd backend
   ```

2. Execute o projeto com Docker Compose:

   ```bash
   docker-compose up --build
   ```

3. Acesse a aplicação em: [http://localhost:3000](http://localhost:3000)
