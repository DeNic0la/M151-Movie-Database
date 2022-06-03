import mysql from 'mysql2/promise';
import {getSequelize} from "../config/sequelize.js";

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
    const query = 'SELECT * FROM Movies where user = ? OR public = 1';
    const [data] = await connection.query(query, [userid]);
    return data;
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

export async function get(movie, userid) {
    const query = 'SELECT * FROM Movies WHERE id = ? AND user = ? OR public = 1';
    const [data] = await connection.query(query, [movie.id, userid]);
    return data.pop();
}

export async function remove(id) {
    const deleteMovieQuery = 'DELETE FROM Movies WHERE id = ?';
    const deleteRatingQuery = 'DELETE FROM Ratings WHERE movie = ?';
    await connection.query(deleteMovieQuery, [id]);
    await connection.query(deleteRatingQuery, [id]);
    return;
}

export function save(movie, userid) {
    if (!movie.id) {
        return insert(movie, userid);
    } else {
        return update(movie);
    }
}
