//* EN EXPRESS TENEMOS ALGO QUE SE LLAMA ROUTER
const { Router } = require('express');
const router = Router() //ejecutamos router

router.get('/api/suma/:num1/:num2', (req, res) => {
    const {num1, num2} = req.params
    let sum = parseInt(num1) + parseInt(num2);
    res.status(200).json({result: sum})
})

router.post('/api/suma/'), (req, res) => {
    const {num1, num2} = req.body
    if(num1&&num2){
        const suma = parseInt(num1) + parseInt(num2)
        res.status(200).json({
            num1: num1,
            num2: num2,
            result: suma
        })
    } else {
        res.status(500).json({error: "Error en el servidor"})
    }
}

module.exports = router 