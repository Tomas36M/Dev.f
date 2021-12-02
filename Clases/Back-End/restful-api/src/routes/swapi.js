//* EN EXPRESS TENEMOS ALGO QUE SE LLAMA ROUTER
const { Router } = require('express');
const axios = require('axios')
const router = Router() //ejecutamos router

router.get('/api/swapi/:id', async (req, res) => {
    const {id} = req.params
    await axios.get(`https://swapi.dev/api/people/${id}`)
    .then(response => res.status(200).json({Personaje: response.data}))
})

module.exports = router