export {};
import mongoose, { Schema } from "mongoose";

interface IEmployer {
  userId: Schema.Types.ObjectId;
  position: String;
  companyId: Schema.Types.ObjectId;
}

export const EmployerSchema = new Schema<IEmployer>({
  userId: { type: Schema.Types.ObjectId, ref: "User" },
  position: { type: String, required: true },
  companyId: { type: Schema.Types.ObjectId, ref: "Company" },
});

const Employer = mongoose.model<IEmployer>("Employer", EmployerSchema);

export default Employer;
