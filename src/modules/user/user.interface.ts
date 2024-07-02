import { Model } from "mongoose";

export type IUser = {
  name: string;
  password: string;
  email: string;
  comparePassword: (candidatePassword: string) => Promise<boolean>;
};

export interface UserModel extends Model<IUser> {
  isUserExist(email: string): Promise<IUser | null>;
}
