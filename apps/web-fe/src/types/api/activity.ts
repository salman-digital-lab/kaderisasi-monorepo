import { Activity, Registrant } from "@kaderisasi/data-model";

import { APIPagiResponse, APIResponse } from "../helper";

export type GetActivitiesReq = {
  per_page?: string;
  page?: string;
  search?: string;
};

export type GetActivitiesResp = APIPagiResponse<Activity>;

export type GetActivityReq = {
  slug: string;
};

export type GetActivityResp = APIResponse<Activity>;

export type PostActivityReq = {
  slug: string;
  data: { questionnaire_answer: Record<string, string> };
};

export type PostActivityResp = APIResponse<Registrant>;

export type GetActivityRegistrationReq = {
  slug: string;
};

export type GetActivityRegistrationResp = APIResponse<{ status: string }>;

export type GetActivitiesRegistrationResp = APIResponse<
  ({ activity: Activity } & Registrant)[]
>;

export type PutActivityReq = {
  slug: string;
  data: { questionnaire_answer: Record<string, string> };
};

export type PutActivityResp = APIResponse<Registrant>;
