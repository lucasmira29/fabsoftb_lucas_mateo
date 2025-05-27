import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

type ModalProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  consulta?: {
    paciente: string;
    medico: string;
    telefone: string;
    email: string;
    data: string;
  };
};

function Modal({ open, onOpenChange, consulta }: ModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Detalhes da Consulta</DialogTitle>
          <DialogDescription>
            {consulta ? (
              <div className="space-y-2 mt-2 text-sm text-muted-foreground">
                <p><strong>Paciente:</strong> {consulta.paciente}</p>
                <p><strong>Médico:</strong> {consulta.medico}</p>
                <p><strong>Telefone:</strong> {consulta.telefone}</p>
                <p><strong>Email:</strong> {consulta.email}</p>
                <p><strong>Data:</strong> {consulta.data}</p>
              </div>
            ) : (
              <p>Carregando dados da consulta...</p>
            )}
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}

export default Modal;
