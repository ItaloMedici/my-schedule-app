import { Router } from "express";
import { CustomerController, AuthUserController, ScheduleController, UserController } from "./controllers";
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
 * Customer Routes
 */
router.post("/customer", ensureAuth, CustomerController.create);
router.get("/customers", ensureAuth, CustomerController.getAll);
router.get("/customer/:id", ensureAuth, CustomerController.get);
router.delete("/customer/:id", ensureAuth, CustomerController.delete);

export { router }