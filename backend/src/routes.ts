import { Router } from "express";
import AuthUserController from "./controllers/AuthUserController";
import CreateScheduleController from "./controllers/CreateScheduleController";
import { ensureAuth } from "./middlewares/ensureAuth";

const router =  Router();
const userController = new AuthUserController();
const scheduleController = new CreateScheduleController();

router.post("/register", userController.register);

router.post("/login", userController.login);

router.post("/service", ensureAuth, scheduleController.handle)

export { router }