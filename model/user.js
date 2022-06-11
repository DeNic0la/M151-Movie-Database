import {getSequelize} from "../config/sequelize.js";
import {Sequelize, DataTypes } from "sequelize";

const sequelize = getSequelize();

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

