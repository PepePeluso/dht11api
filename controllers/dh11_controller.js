const { db } = require("../cnn")

//consultas
const getDHT11 = async (req, res) => {
    const consulta = 'SELECT * FROM "dhtMedidas" ORDER BY dme_id_medidas DESC LIMIT 10;'
    const response = await db.query(consulta)
    res.status(200).json(response)
}

const getLastHumedadDHT11 = async (req, res) => {
    const consulta = 'SELECT * FROM "dhtMedidas" WHERE dme_dtm_id_tipo=1 ORDER BY dme_id_medidas DESC LIMIT 1;'
    const response = await db.query(consulta)
    res.status(200).json(response)
}

const getLastTemperaturaDHT11 = async (req, res) => {
    const consulta = 'SELECT * FROM "dhtMedidas" WHERE dme_dtm_id_tipo=2 ORDER BY dme_id_medidas DESC LIMIT 1;'
    const response = await db.query(consulta)
    res.status(200).json(response)
}

const postDHT11 = async (req,res) => {
    const consulta = 'INSERT INTO "dhtMedidas"(dme_dtm_id_tipo,dme_id_medida) VALUES ($1,$2) returning *;'
    try {
        const dht11 = req.body;
        const response = await db.one(consulta,[
            dht11.tipo,
            dht11.medida
        ])
        res.status(201).json({
            message: "Dato ingresado correctamente",
            body: response
        })
    } catch (e) {
        res.status(400).json({
            code: e.code,
            message: e.message
        })
    }
}

module.exports = {getDHT11, postDHT11, getLastHumedadDHT11, getLastTemperaturaDHT11}