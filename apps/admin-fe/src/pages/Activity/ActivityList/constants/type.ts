import {
  ACTIVITY_TYPE_ENUM,
  ACTIVITY_CATEGORY_ENUM,
} from "@kaderisasi/data-model";

export type FilterType = {
  page: number;
  per_page: number;
  name: string;
  activity_type?: ACTIVITY_TYPE_ENUM;
  activity_category?: ACTIVITY_CATEGORY_ENUM;
};
