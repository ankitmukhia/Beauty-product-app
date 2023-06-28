import express from "express";
import { getMakeUp, getSkinCare, searchItems } from "../collection/CRUD/index.js";
const router = express.Router();

router.get("/makeup", getMakeUp);
router.get("/skincare", getSkinCare);
router.get("/search", searchItems);

export default router;
