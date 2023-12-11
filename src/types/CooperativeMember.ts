type LegalEntityType = "física" | "jurídica";

export interface CooperativeMember {
  id: string;
  name: string;
  identificationNumber: string;
  date: string;
  legalEntityType: LegalEntityType | '';
  income?: string;
  phoneNumber?: string;
}

export enum PageEnum {
  list, add, edit
}