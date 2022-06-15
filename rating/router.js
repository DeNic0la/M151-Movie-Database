import { Router } from "express";
import {
    getRatingbyMovieId,
    getRatingByUserID,
    saveRating,
} from "./controller.js";

const router = Router();

router.get("/rating/getMovieId/:rating", getRatingbyMovieId);
router.get("/rating/getUserId/:rating", getRatingByUserID);
router.post("/rating/save/:rating", saveRating);

export { router };