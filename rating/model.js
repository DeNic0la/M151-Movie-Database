import {Ratings} from "../model/model.js";
import {Op} from "sequelize";

/**
 * Calls {@link getAvgRatingByMovieId} with the Id of the passed movie
 * @param movie The Movie to get the Rating for
 * @returns {number} Average Rating of the Movie
 */
export async function getAvgRatingByMovie(movie) {
    return getAvgRatingByMovieId(movie.id);

}

/**
 * Returns the AVG rating of a Movie, if the Movie wasnt rated returns 0
 * @param movieId the id of the Movie to find
 * @returns {number} Average Rating of the Movie
 */
export async function getAvgRatingByMovieId(movieId) {
    let ratings = await Ratings.findAll({
        where: {
            movie: movieId
        }
    });
    let sum = 0;
    let count = ratings.length;
    if (count === 0) {
        return sum;
    }
    for (let i = 0; i < ratings.length; i++) {
        sum += ratings[i].rating;
    }
    return sum / count;
}

/**
 * This function has a lot of room for improvment put i guess that has to do for now.
 * @param userId Id of the user
 * @param movieId id of the Movie
 * @param rating new Rating, this needs to be a INT, this will not be validated
 * @returns {Promise<void>} basicly nothing
 */
export async function addOrEdditRating(userId, movieId, rating) {

    let data = await Ratings.findOne({
        where: {
            [Op.and]: [
                {
                    movie: movieId
                },
                {
                    user: userId
                }
            ]
        }
    });
    if (!data) {
        data = {
            movie: movieId,
            user: userId,
        };
    } else {
        data = data.dataValues;
    }
    data.rating = parseInt(rating);

    await Ratings.upsert(data);

}

/**
 * Returns a rating a user made
 * @param movieId the ID of the Movie
 * @param userId id of the current user
 * @returns {Promise<Model<any, TModelAttributes>>}
 */
export async function getRatingByMovieIdAndUserID(movieId, userId) {
    let ratings = await Ratings.findOne({
        where: {
            [Op.and]: [
                {movie: movieId},
                {user: userId}
            ]
        }
    });
    return ratings;
}