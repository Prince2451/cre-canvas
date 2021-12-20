import { RequestHandler, RequestParamHandler } from "express";
import { Types } from "mongoose";
import { tokenFields } from "../modules/auth/authTypes";

export type withDocId<T extends object> = T & { _id: Types.ObjectId };
export type Optional<T, K extends keyof T> = Pick<Partial<T>, K> & Omit<T, K>;
export interface PrivateReqData extends Record<string, any> {
  user: tokenFields;
}
export type PublicRequestHandler<
  Params = Record<string, string>,
  ResBody = any,
  ReqBody = any,
  ReqQuery = qs.ParsedQs,
  Locals extends Record<string, any> = Record<string, any>
> = RequestHandler<Params, ResBody, ReqBody, ReqQuery, Locals>;
export type PrivateRequestHandler<
  Params = Record<string, string>,
  ResBody = any,
  ReqBody = any,
  ReqQuery = qs.ParsedQs,
  Locals extends PrivateReqData = PrivateReqData
> = RequestHandler<Params, ResBody, ReqBody, ReqQuery, Locals>;
