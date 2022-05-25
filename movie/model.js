import {getSequelize} from "../config/sequelize.js";
import {Op, Sequelize} from "sequelize";

const sequelize = getSequelize();

export const Movies = sequelize.define(
    "Movies",
    {
        title: {
            type: Sequelize.STRING,
        },
        year: {
            type: Sequelize.INTEGER,
        },
        public: {
            type: Sequelize.BOOLEAN,
            defaultValue: true,
        },
        user: {
            type: Sequelize.STRING,
            allowNull: true,
        }
    },
    {timestamps: false}
);

export async function getAll(userid) {
    return Movies.findAll({
        where: {
            [Op.or]: [
                {public: true},
                {user: userid}
            ]
        }
    });
}


export async function get(id, uid) {

    let m = await Movies.findByPk(id);
    if (m.public === true || m.user === uid) {
        return m;
    }
    return null;
}

export async function remove(id, uid) {
    let m = await Movies.findByPk(id);
    if (m.public === true || m.user === uid) {
        await m.destroy();
    }

}

export function save(movie) {
    Movies.upsert(movie);
}
