import {Op, Sequelize} from "sequelize";

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
const sequelize = getSequelize()

const Movies = sequelize.define(
    "Movies",
    {
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
            type: Sequelize.STRING,
            allowNull: true,
        }
    },
    {timestamps: false}
);

export function getAll(uid) {
    return Movies.findAll({
        where: {
            [Op.or]: [
                {public: true},
                {user: uid}
            ]
        }
    })
}

export async function get(id, uid) {
    let m = await Movies.findByPk(id);
    if (m.public === true || m.user === uid) {
        return m;
    }
    return null
}

export async function remove(id, uid) {
    let m = await Movies.findByPk(id);
    if (m.public === true || m.user === uid) {
        await m.destroy();
    }
}

export function save(movie) {
    console.log(movie);
    Movies.upsert(movie)
}
