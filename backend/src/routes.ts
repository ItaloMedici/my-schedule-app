import { Router } from "express";
import { ClientController, AuthUserController, ScheduleController, UserController } from "./controllers";
import { ensureAuth } from "./middlewares/ensureAuth";

const router = Router();

/**
 * User Auth Routes
 */
router.post("/register", AuthUserController.register);
router.post("/login", AuthUserController.login);

/**
 * User Routes
 */
router.get("/user", ensureAuth, UserController.getAll);
router.get("/user/:id", ensureAuth, UserController.get);
router.delete("/user/:id", ensureAuth, UserController.delete);

/**
 * Schedule Routes
 */
router.post("/schedule", ensureAuth, ScheduleController.createOrUpdate);
router.get("/schedules", ensureAuth, ScheduleController.getAll);
router.get("/build-feed", ensureAuth, ScheduleController.buildFeed);
router.get("/schedule/:id", ensureAuth, ScheduleController.get);
router.delete("/schedule/:id", ensureAuth, ScheduleController.delete);

/**
 * Client Routes
 */
router.post("/client", ensureAuth, ClientController.create);
router.get("/client", ensureAuth, ClientController.getAll);
router.get("/client/:id", ensureAuth, ClientController.get);
router.delete("/client/:id", ensureAuth, ClientController.delete);

export { router }