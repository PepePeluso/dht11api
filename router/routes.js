// Importaciones
const { Router } = require("express")
const { getDHT11, postDHT11 } = require("../controllers/dh11_controller")

const router = Router()

const URLV1 = "/v1"

//Rutas dht11
router.get(URLV1 + "/dht11", getDHT11)
router.post(URLV1 + "/dht11", postDHT11)

module.exports = router