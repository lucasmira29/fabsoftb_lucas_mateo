export type AuthContextType = {
  user: UserContextType | null;
  isLoading: boolean;
  login: (user: UserContextType) => void;
  logout: () => void;
}

export type UserContextType = {
  id: number;
  name: string;
  document: string;
  email: string;
  role: string;
}