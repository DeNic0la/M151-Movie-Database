import {getSequelize} from "../config/sequelize.js";
import {Op, Sequelize} from "sequelize";


const sequelize = getSequelize();

export const Movies = sequelize.define(
    "Movies",
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true
        },
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
            type: Sequelize.INTEGER,
            allowNull: true,
        }
    },
    {timestamps: false}
);


