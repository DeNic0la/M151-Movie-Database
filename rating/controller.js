import {  getAvgRatingByMovieId, addOrEdditRating } from "./model";

//expects movieId returns rating obj
export async function getRatingbyMovieId(request, response) {
  const data = await getAvgRatingByMovieId(request.params.id);
  response.send(data);
}

//expects moveid, rating
export async function saveRating(request, response) {
  await addOrEdditRating(request.user.id, request.params.id, request.params.rating );
  response.redirect(request.baseUrl);
}