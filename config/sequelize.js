import {Sequelize} from "sequelize";

export let sequelize = new Sequelize(
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
sequelize.authenticate().then(function () {
    console.log("Connected to Database");
}).catch(function (errors) {
    console.log(errors);
    throw new Error('Datenbankverbindung konnte nicht Hergestellt werden');
});