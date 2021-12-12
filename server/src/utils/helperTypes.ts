import { Types } from "mongoose";

export type withDocId<T extends object> = T & { _id: Types.ObjectId };
