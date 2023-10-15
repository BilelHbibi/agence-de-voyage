import express from "express";
import {
  createTour,
  deleteTour,
  getAllTour,
  getFeaturedTour,
  getSingleTour,
  getTourBySearch,
  getTourCount,
  updateTour,
} from "../controllers/tourController.js";
import { verifyAdmin } from "../utils/VerifyToken.js";
const router = express.Router();

//Create new Tour
router.post("/", createTour);

//update Tour
router.put("/:id",verifyAdmin, updateTour);

//delete Tour 
router.delete  ("/:id",verifyAdmin, deleteTour);

//get Single Tour
router.get("/:id", getSingleTour);

//get All Tour
router.get("/", getAllTour);

//get tour bySearch 
router.get("/search/getTourBySearch", getTourBySearch);
router.get("/search/getFeaturedTour", getFeaturedTour);
router.get("/search/getTourCount", getTourCount)

export default router;
