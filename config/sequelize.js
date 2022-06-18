import {Sequelize} from "sequelize";

export let sequelize = new Sequelize(
    "movie-db",
    "root",
    "sml12345",
    {
        dialect: "mysql",
        database: "movie-db",
        host: "database",
        port: 3306,
    },
);
let isConnected = false;
while (!isConnected){
    sequelize.authenticate().then(function() {
        isConnected = true;
        console.log("Connected to Database");
    }).catch(function (errors) {
        console.log(errors);
        throw new Error('Datenbankverbindung konnte nicht Hergestellt werden');
    });
}

