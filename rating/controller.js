import {  getAvgRatingByMovieId, addOrEdditRating, getRatingByMovieIdAndUserID } from "./model.js";

//expects movieId returns rating obj
export async function getRatingbyMovieId(request, response) {
  const data = await getAvgRatingByMovieId(request.params.id);
  response.send(data);
}

//expects movieId, userId
export async function getRatingByUserId(request, response) {
  const data = await getRatingByMovieIdAndUserID(request.params.id, request.user.id);
  response.send(data);
}

//expects movieid, rating
export async function saveRating(request, response) {
  await addOrEdditRating(request.user.id, request.params.id, request.params.rating );
  response.redirect(request.baseUrl);
}