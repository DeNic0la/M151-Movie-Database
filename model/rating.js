import {sequelize} from "../config/sequelize.js";
import {Sequelize} from "sequelize";


export const Ratings = sequelize.define(
    "Ratings",
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            select: false,
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

