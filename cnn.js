const pgPromise = require("pg-promise")

const config = {
    host: "bihk3ii2jbjzijwhg33b-postgresql.services.clever-cloud.com",
    port: "5432",
    database: "bihk3ii2jbjzijwhg33b",
    user: "uuqwggbavhmkafubzxrh",
    password: "fTg9p0IxDycoGA3fLVPSBraTOY7z0G",
    ssl: false
}

const pgp = pgPromise({})
const db = pgp(config)

exports.db = db