import mongoose, { Schema } from "mongoose";

interface ICompany {
  photoPath: string;
  companyName: string;
  workersQuantity: number;
  companyType: string;
  location: {
    country: string;
    city: string;
  };
  description: string;
  companyUrl: string;
  social: {
    title: string;
    url: string;
  }[];
}

export const CompanySchema = new Schema<ICompany>({
  photoPath: String,
  companyName: { type: String, required: true },
  workersQuantity: Number,
  companyType: String,
  location: {
    country: String,
    city: String,
  },
  description: String,
  companyUrl: String,
  social: [
    {
      title: String,
      city: String,
    },
  ],
});

const Company = mongoose.model<ICompany>("Company", CompanySchema);

export default Company;
