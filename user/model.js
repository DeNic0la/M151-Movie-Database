import {getSequelize} from "../config/sequelize.js";
import {Sequelize} from "sequelize";
import {Movies} from "../movie/model.js";

const sequelize = getSequelize();

export const Users = sequelize.define(
    "Users",
    {
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
Users.hasMany(Movies, {
    foreginKey: 'user'
});

export async function get(query = {}){

    if (!query) {
        return {};
    }
    return await Users.findOne({where: query});
}