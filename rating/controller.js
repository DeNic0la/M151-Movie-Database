import { response } from "express";
import { getAvgRatingByMovie, getAvgRatingByMovieId, addOrEdditRating } from "./model";

//expects movieId
export async getRatingbyMovieId(request, response) {
  let movie = { id: "", title: "", year: "", public: ""};
  response.send(body);
}

//expects moveid, rating and returns rating obj
export async saveRating(request, response) {
  response.send(body);
}