export interface IuserProviderProps{
  children: React.ReactNode;
}

export interface IuserElements{
  email: string;
  name: string;
  id: number;
}

export interface Iuser{
  accessToken: string;
  user: IuserElements;
}