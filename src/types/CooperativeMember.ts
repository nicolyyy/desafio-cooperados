export interface CooperativeMember {
  id: string;
  name: string;
  cpf: string;
  birthDate: string;
  income?: number;
  phoneNumber?: string;
}

export enum PageEnum {
  list, add, edit
}