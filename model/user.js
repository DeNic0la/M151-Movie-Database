import {sequelize} from "../config/sequelize.js";
import {Sequelize} from "sequelize";


export const Users = sequelize.define(
    "Users",
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        firstname: {
            type: Sequelize.STRING,
        },
        lastname: {
            type: Sequelize.STRING,
        },
        username: {
            type: Sequelize.STRING,
        },
        password: {
            type: Sequelize.STRING,
        }
    },
    {timestamps: false}
);

