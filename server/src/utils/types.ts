import { RequestHandler } from "express";
import { Types } from "mongoose";
import { TokenFields } from "../modules/auth/authTypes";

export type WithDocId<T extends object> = T & { _id: Types.ObjectId };
export type Optional<T, K extends keyof T> = Pick<Partial<T>, K> & Omit<T, K>;
export interface PrivateReqData extends Record<string, any> {
  user: TokenFields;
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
