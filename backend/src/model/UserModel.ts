export {};
import mongoose, { Schema } from "mongoose";

interface IUser {
  _id: Schema.Types.ObjectId;
  photoPath: string;
  name: {
    firstName: string;
    lastName: string;
  };
  birthDate?: Date;
  location?: {
    country: string;
    city: string;
  };
  email: string;
  password: string;
  createdAt?: Date;
  roles: Object;
}

export const UserSchema = new Schema<IUser>({
  _id: Schema.Types.ObjectId,
  photoPath: String,
  name: {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
  },
  email: { type: String, required: true },
  password: { type: String, required: true },
  birthDate: Date,
  location: {
    country: String,
    city: String,
  },
  createdAt: Date,
  roles: {
    Employer: {
      type: Number,
      default: 2001,
    },
    Student: Number,
    Admin: Number,
  },
});

const User = mongoose.model<IUser>("User", UserSchema);
export default User;
