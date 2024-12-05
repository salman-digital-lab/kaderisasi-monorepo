import { APIResponse } from "../helper";
import { RuangCurhatData } from "@kaderisasi/data-model";

export type PostRuangCurhatReq = Partial<RuangCurhatData>;

export type PostRuangCurhatResp = APIResponse<RuangCurhatData>;

export type GetRuangCurhatResp = APIResponse<RuangCurhatData[]>;
