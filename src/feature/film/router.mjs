import express from "express";
import { getAll, getOne } from "./controller.mjs";

const router = express.Router();
// Get film
router.get("/", getAll);
// Get film/:id
router.get("/:id", getOne);

export const filmRouter = router;
