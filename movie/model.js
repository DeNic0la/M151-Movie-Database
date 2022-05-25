import mysql from 'mysql2/promise';
import {getSequelize} from "../config/sequelize.js";
import {Op, Sequelize} from "sequelize";

const sequelize = getSequelize();

const Movies = sequelize.define(
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

await connection.connect();

//TODO Fileter
export async function getAll(userid) {
    return Movies.findAll({
        where: {
            [Op.or]: [
                {public: true},
                {user: userid}
            ]
        }
    })
}

async function insert(movie, userid) {
    const query = 'INSERT INTO Movies (title, year, user, public) VALUES (?, ?, ?, ?)';
    const [result] = await connection.query(query, [movie.title, movie.year, userid, movie.public]);
    return { ...movie, id: result.insertId };
}

async function update(movie) {
    const query = 'UPDATE Movies SET title = ?, year = ? WHERE id = ?';
    await connection.query(query, [movie.title, movie.year, movie.id]);
    return movie;
}

export async function get(id, uid) {

    let m = await Movies.findByPk(id);
    if (m.public === true || m.user === uid) {
        return m;
    }
    return null
}

export async function remove(id, uid) {
    let m = await Movies.findByPk(id);
    if (m.public === true || m.user === uid) {
        await m.destroy();
    }

}

export function save(movie) {
    Movies.upsert(movie)
}
