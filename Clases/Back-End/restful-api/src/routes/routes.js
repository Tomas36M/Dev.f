//* EN EXPRESS TENEMOS ALGO QUE SE LLAMA ROUTER
const { Router } = require('express');
const router = Router() //ejecutamos router

router.get('/user', function (req, res) {
    const data = {
        "name": "Tomas",
        "lastname": "Munevar"
    }
    res.json(data)
})

module.exports = router