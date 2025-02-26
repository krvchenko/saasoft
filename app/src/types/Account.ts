import { AccountTypeEnum } from '@/enum';

export type Tag = {
  text: string;
}

export default interface Account {
  tags: Tag[];
  type: AccountTypeEnum;
  login: string;
  password: string | null;
}
