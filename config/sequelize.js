import {Sequelize} from "sequelize";

export function getSequelize() {
    return new Sequelize(
        "movie-db",
        "root",
        "sml12345",
        {
            dialect: "mysql",
            database: "movie-db",
            host: "127.0.0.1",
            port: 1235,
        },
    );
}

