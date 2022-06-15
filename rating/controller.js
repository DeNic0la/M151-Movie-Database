import {  getAvgRatingByMovieId, addOrEdditRating, getRatingByMovieIdAndUserID } from "./model.js";

//expects movieId returns rating obj
export async function getRatingbyMovieId(request, response) {
  const movieId =request.params.movieId;
  console.log("Input" + movieId);
  const data = getAvgRatingByMovieId(movieId);
  console.log(data);
  response.send(data);
}

//expects movieId, userId
export async function getRatingByUserId(request, response) {
  let movieId = request.params.movieId;
  console.log(movieId)
  const data = await getRatingByMovieIdAndUserID(movieId, request.user.id);
  response.send(data);
}

//expects movieid, rating
export async function saveRating(request, response) {
  await addOrEdditRating(request.user.id, request.params.movieId, request.params.rating);
  response.redirect(request.baseUrl);
}