import {Movies, Ratings} from "../model/model.js";
import {Op, Sequelize} from "sequelize";


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
    return Movies.findAll({
        where:{
            [Op.or]: [
                {public: true},
                {user: userId}
            ]
        },
        include: [
            {
                model: Ratings,
                attributes:[
                    [Sequelize.fn('AVG','Rating.rating'),'avgRating']
                ],
            },
        ],
        group: ['Movies.id']

    });
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