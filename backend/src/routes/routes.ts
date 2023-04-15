import express from "express";
import createUser from "../controllers/registerController";
import loginUser from "../controllers/loginController";
import refreshToken from "../controllers/refreshTokenController";
import getAllUsers from "../controllers/userController";
import { getVacancy } from "../controllers/searchController";
import verifyToken from "../middleware/verifyToken";
import verifyRoles from "../middleware/verifyRoles";
import ROLES from "../config/roles";
import logoutUser from "../controllers/logoutController";

const routes = require("express").Router();

routes.get("/", (req: express.Request, res: express.Response) => {
  res.send("Test endpoint");
});

routes.post("/register", createUser);
routes.post("/login", loginUser);
routes.get("/refresh", refreshToken);
routes.get("/logout", logoutUser);

routes.get("/search", getVacancy);

routes.get("/users", verifyRoles(ROLES.Student), verifyToken, getAllUsers);
module.exports = routes;
