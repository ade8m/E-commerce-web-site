import express from "express";
import { createHotel, deleteHotel, getallHotel, getHotel, updateHotel } from "../controllers/hotel.js";
import HOTEL from "../models/HOTEL.js";
import {createError}  from "../utile/error.js";
const router = express.Router();

//create
router.post("/", createHotel);
//update
router.put("/:id", updateHotel);
//delete
router.delete("/:id", deleteHotel);
//get
router.get("/:id", getHotel);
//get all
router.get("/", getallHotel);

export default router;