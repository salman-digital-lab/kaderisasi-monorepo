import {
  ACTIVITY_TYPE_ENUM,
  ACTIVITY_CATEGORY_ENUM,
  ACTIVITY_REGISTRANT_STATUS_ENUM,
  Registrant,
  Activity,
} from "@kaderisasi/data-model";
import { Pagination } from "./base";

export type getActivitiesReq = {
  per_page: string;
  page: string;
  search?: string;
  activity_type?: ACTIVITY_TYPE_ENUM;
  category?: ACTIVITY_CATEGORY_ENUM;
};

export type getActivitiesResp = {
  message: string;
  data: {
    meta: Pagination;
    data: Activity[];
  };
};

export type getActivityResp = {
  message: string;
  data: Activity;
};

export type getRegistrantsResp = {
  message: string;
  data: {
    meta: Pagination;
    data: Registrant[];
  };
};

export type getRegistrantResp = {
  message: string;
  data: Registrant;
};

export type putRegistrantReq = {
  registrations_id: string[];
  status: ACTIVITY_REGISTRANT_STATUS_ENUM;
};

export type postRegistrantsReq = {
  user_id?: string;
  questionnaire_answer?: Record<string, string>;
};

export type putActivityReq = Partial<Activity>;

export type putActivityResp = {
  message: string;
  data: Activity;
};

export type postActivityReq = Partial<Activity>;

export type postActivityResp = {
  message: string;
  data: Activity;
};

export type getRegistrantReq = {
  per_page: string;
  page: string;
  name?: string;
  status?: string;
};
