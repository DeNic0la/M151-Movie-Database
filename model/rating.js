import {sequelize} from "../config/sequelize.js";
import {Op, Sequelize, DataTypes} from "sequelize";


export const Ratings = sequelize.define(
    "Ratings",
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        user: {
            type: Sequelize.INTEGER,
        },
        movie: {
            type: Sequelize.INTEGER,
        },
        rating: {
            type: Sequelize.INTEGER,
        },

    },
    {timestamps: false}
);

