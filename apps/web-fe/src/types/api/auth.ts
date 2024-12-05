import { APIResponse } from "../helper";
import { Token } from "../model/members";
import { Member, PublicUser } from "@kaderisasi/data-model";

export type LoginResp = APIResponse<{
  user: PublicUser;
  data: Member;
  token: Token;
}>;

export type RegisterResp = APIResponse<Member>;
