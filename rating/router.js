import {Router} from "express";
import {
    getRatingbyMovieId,
    getRatingByUserId,
    saveRating,
} from "./controller.js";

const router = Router();

router.get("/averageRating/:movieId", getRatingbyMovieId);
router.get("/getUserRating/:movieId", getRatingByUserId);
router.get("/:movieId/:rating", saveRating);

export {router};