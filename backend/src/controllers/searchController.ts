import express from "express";
import mongoose from "mongoose";
import Vacancy from "../model/VacancyModel";

export const getVacancy = async (req: express.Request, res: express.Response) => {
  const { title, city, experience, languages } = req.query;
  console.log("experience", experience, "title", title, "city", city, "languages", languages);

  try {
    const vacancies = await Vacancy.find({
      $and: [
        {
          ...(title?.length ? { title: { $regex: title } } : {}),
        },
        { ...(experience?.length ? { experience: +experience } : {}) },
        { ...(city?.length ? { "location.city": city } : {}) },
      ],
    });

    if (vacancies.length == 0) return res.status(400).json({ message: "No content" });

    res.status(200).json({ vacancies: vacancies });
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error });
  }
};
