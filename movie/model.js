import {Op} from "sequelize/types/index.js";
import {Movies} from "../model/model.js";

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