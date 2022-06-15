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
    const movies = await sequelize.query("SELECT Movies.id, Movies.title, Movies.year, Movies.user, Movies.public, R.Rating, IFNULL(R.rating,0) as 'userRating' FROM Movies " +
        " Left JOIN Ratings R on Movies.id = R.movie and R.user = "+userId+
        " WHERE Movies.public = true OR Movies.user = " +userId+";" );
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