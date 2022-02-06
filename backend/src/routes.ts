import { Router } from "express";
import { ClientController, AuthUserController, ScheduleController } from "./controllers";
import { ensureAuth } from "./middlewares/ensureAuth";

const router = Router();

/**
 * User Routes
 */
router.post("/register", AuthUserController.register);
router.post("/login", AuthUserController.login);

/**
 * Schedule Routes
 */
router.post("/service", ensureAuth, ScheduleController.create);

/**
 * Client Routes
 */
router.post("/client", ensureAuth, ClientController.create);

export { router }