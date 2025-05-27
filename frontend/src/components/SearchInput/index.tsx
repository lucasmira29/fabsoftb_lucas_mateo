/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import api from "@/services/api";

interface Usuario {
  id: string;
  name: string;
}

interface SearchInputProps {
  SearchRole: string;
  placeholder?: string;
  onSelect: (item: Usuario) => void;
}

function SearchInput({
  placeholder = "Buscar...",
  onSelect,
  SearchRole,
}: SearchInputProps) {
  const [name, setName] = useState("");
  const [results, setResults] = useState<Usuario[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    if (name.length < 2) {
      setResults([]);
      return;
    }

    const fetchResults = async () => {
      try {
        setLoading(true);
        const endpoint = SearchRole === "admin" ? "usuarios" : SearchRole;
        const { data } = await api.get(`/${endpoint}?name=${name}`, {
          signal: controller.signal,
        });

        const formatResults = (): Usuario[] => {
          if (!data) return [];

          switch (SearchRole) {
            case "pacientes":
              return data.pacientes.map((p: any) => ({
                id: p.id,
                name: p.user.name,
              }));
            case "medicos":
              return data.medicos.map((m: any) => ({
                id: m.id,
                name: m.user.name,
              }));
            case "admin":
              return data.users.map((u: any) => ({
                id: u.id,
                name: u.name,
              }));
            default:
              return [];
          }
        };

        setResults(formatResults());
      } catch (err: any) {
        if (err.name !== "CanceledError") {
          console.error("Erro ao buscar usuários:", err);
        }
      } finally {
        setLoading(false);
      }
    };

    const timeout = setTimeout(fetchResults, 300);

    return () => {
      clearTimeout(timeout);
      controller.abort();
    };
  }, [name, SearchRole]);

  return (
    <Command>
      <CommandInput
        placeholder={placeholder}
        value={name}
        onValueChange={setName}
      />
      <CommandList>
        {loading && <div className="p-2 text-sm">Carregando...</div>}

        {!loading && name.length >= 2 && results.length === 0 && (
          <CommandEmpty>Nenhum resultado encontrado.</CommandEmpty>
        )}

        <CommandGroup>
          {results.map((user) => (
            <CommandItem
              key={user.id}
              value={user.name}
              onSelect={() => onSelect(user)}
            >
              {user.name}
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </Command>
  );
}


export default SearchInput;