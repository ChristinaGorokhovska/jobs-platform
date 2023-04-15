import mongoose, { Schema } from "mongoose";

interface IStudent {
  _id: Schema.Types.ObjectId;
  userId: Schema.Types.ObjectId;
  courseNumber: number;
  specialization: string;
  program: string;
  faculty: string;
  avgPoint: number;
  headline: string;
  jobTitles: string[];
  workPlaces: string[];
  jobTypes: string[];
  experience: {
    title: string;
    companyName: string;
    duration: {
      start: Date;
      end?: Date;
    };
    location: {
      country: string;
      city: string;
    };
  };
  salary: {
    min: number;
    max: number;
  };

  languages: string[];
  hardSkills: string[];
  softSkills: string[];

  certificates: {
    title: string;
    url: string;
  }[];

  activities: {
    title: string;
    url: string;
  }[];

  portfolio: {
    title: string;
    url: string;
  }[];
}

export const StudentSchema = new Schema<IStudent>({
  _id: Schema.Types.ObjectId,
  userId: { type: Schema.Types.ObjectId, ref: "User" },
  courseNumber: { type: Number, required: true },
  specialization: { type: String, required: true },
  program: { type: String, required: true },
  faculty: { type: String, required: true },
  avgPoint: { type: Number },
  headline: String,
  jobTitles: { type: [String] },
  workPlaces: { type: [String] },
  jobTypes: { type: [String] },
  experience: {
    title: { type: String, required: true },
    companyName: { type: String },
    duration: {
      start: Date,
      end: Date,
    },
    location: {
      country: String,
      city: String,
    },
  },

  salary: {
    min: Number,
    max: Number,
  },
  languages: [String],
  hardSkills: [String],
  softSkills: [String],

  certificates: [
    {
      title: String,
      url: String,
    },
  ],

  activities: [
    {
      title: String,
      url: String,
    },
  ],

  portfolio: [
    {
      title: String,
      url: String,
    },
  ],
});

const Student = mongoose.model<IStudent>("Student", StudentSchema);

export default Student;
