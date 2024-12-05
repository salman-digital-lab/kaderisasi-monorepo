export type Token = {
  type: string;
  name: string | null;
  token: string;
  ability: string[];
  lastUsedAt: string | null;
  expiredAt: string;
};
