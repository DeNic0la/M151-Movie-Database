import {Ratings} from "./rating.js";
import {Users} from "./user.js";
import {Movies} from "./movie.js";


Movies.hasMany(Ratings, {
    foreignKey: 'movie'
});
Movies.belongsTo(Users, {
    foreignKey: 'user'
});

Ratings.belongsTo(Users, {
    foreignKey: 'user',
});
Ratings.belongsTo(Movies, {
    foreignKey: 'movie'
});

Movies.belongsTo(Users, {
    foreignKey: 'user'
});
Users.hasMany(Movies, {
    foreignKey: 'user'
});

export {Ratings, Users, Movies};