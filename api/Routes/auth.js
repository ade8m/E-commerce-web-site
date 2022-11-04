import express from "express";
import { registre ,login } from "../controllers/auth.js";
import USER from "../modules/USER.js";
const router = express.Router();

router.post("/registre",registre)
router.post("/login",login)
export default router