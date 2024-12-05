import { APIPagiResponse, APIResponse } from "../helper";
import {
  Member,
  PublicUser,
  Province,
  University,
} from "@kaderisasi/data-model";

export type GetProvincesResp = APIResponse<Province[]>;

export type GetUniversitiesResp = APIPagiResponse<University>;

export type GetProfileResp = APIResponse<{
  userData: PublicUser;
  profile: Member;
}>;

export type PutProfileReq = Partial<Member>;

export type PutProfileResp = APIResponse<Member>;
