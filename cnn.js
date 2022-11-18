const pgPromise = require("pg-promise")

const config = {
    host: "dpg-ccqvhjun6mpt37ud27p0-a.oregon-postgres.render.com",
    port: "5432",
    database: "DHT11Database",
    user: "pjrobalinol",
    password: "SgI6ZRLl7enBkBB0uVl6F3eqXDuD7Qrb",
    ssl: true
}

const pgp = pgPromise({})
const db = pgp(config)

exports.db = db