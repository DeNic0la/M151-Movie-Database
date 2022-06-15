import {Movies} from "../model/model.js";
import {Op } from "sequelize";
import {sequelize} from "../config/sequelize.js";



export async function getAll(userid) {
    return Movies.findAll({
        where: {
            [Op.or]: [
                {public: true},
                {user: userid}
            ]
        },

    });
}

export async function getAllMoviesWithRating(userId) {
    const movies = await sequelize.query("SELECT RatedMovies.id, RatedMovies.title, RatedMovies.year, RatedMovies.user, RatedMovies.public, RatedMovies.Rating, IFNULL(R.rating,0) as 'userRating' FROM RatedMovies " +
        " Left JOIN Ratings R on RatedMovies.id = R.movie and R.user = "+userId+
        " WHERE RatedMovies.public = true OR RatedMovies.user = " +userId+";" );
    console.log(movies);
    return movies[0];
}

export async function get(id, uid) {

    let m = await Movies.findByPk(id);
    if (m.public === true || parseInt(m.user) === parseInt(uid)) {
        return m;
    }
    return null;
}

export async function remove(id, uid) {
    let m = await Movies.findByPk(id);
    if (m.public === true || parseInt(m.user) === parseInt(uid)) {
        await m.destroy();
    }

}

export function save(movie) {
    Movies.upsert(movie);
}