import mongoose, { Schema } from "mongoose";

interface IVacancy {
  _id: Schema.Types.ObjectId;
  title: string;
  posterId: Schema.Types.ObjectId;
  companyId: Schema.Types.ObjectId;

  workPlaces: string[];
  jobTypes: string[];

  location: {
    country: string;
    city: string;
  };
  salary: {
    min: number;
    max: number;
  };

  languages: string[];
  hardSkills: string[];
  softSkills: string[];
  responsibilities: string[];
  offering: string[];
  description: string;
}

export const VacancySchema = new Schema<IVacancy>({
  _id: Schema.Types.ObjectId,
  title: { type: String, required: true },
  posterId: { type: Schema.Types.ObjectId, ref: "User" },
  companyId: { type: Schema.Types.ObjectId, ref: "Company" },
  workPlaces: { type: [String] },
  jobTypes: { type: [String] },

  location: {
    country: String,
    city: String,
  },
  salary: {
    min: Number,
    max: Number,
  },

  languages: [String],
  hardSkills: [String],
  softSkills: [String],
  responsibilities: [String],
  offering: [String],
  description: String,
});

const Vacancy = mongoose.model<IVacancy>("Vacancy", VacancySchema);
export default Vacancy;
