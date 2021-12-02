const { Router } = require('express');
const router = Router() //ejecutamos router

router.get('/', function (req, res) {
    const data = "Hola Mundo";
    res.json(data)
})

module.exports = router