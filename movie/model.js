import {Movies, Ratings} from "../model/model.js";
import {Op, Sequelize} from "sequelize";
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
    const movies = await sequelize.query("select Movies.id,Movies.title,Movies.year, IFNULL(avg(Ratings.rating),0) as score from `Movies` Left Join `Ratings` on Ratings.movie = Movies.id WHERE Movies.public = true OR Movies.user = \'"+userId +"\' Group by Movies.id;" );
    console.log(movies);
    return movies;
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