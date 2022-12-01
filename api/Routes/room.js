import express from "express";
const router = express.Router();
import Room from "../models/ROOM.js";
import {
    createRoom,
    deleteRoom,
    getRoom,
    getRooms,
    updateRoom,
    updateRoomAvailability,
        } from "../controllers/room.js";

  import { verifyAdmin } from "../utile/verifyToken.js";
 
  
  
  //CREATE
  router.post("/:hotelid", verifyAdmin, createRoom);
  
  //UPDATE
  router.put("/availability/:id", updateRoomAvailability);
  router.put("/:id", verifyAdmin, updateRoom);
  //DELETE
  router.delete("/:id/:hotelid", verifyAdmin, deleteRoom);
  //GET
  
  router.get("/:id", getRoom);
  //GET ALL
  
  router.get("/", getRooms);
  
  


export default router