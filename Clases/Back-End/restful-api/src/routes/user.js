const { Router } = require('express');
const router = Router() //ejecutamos router

router.get('/api/user/:userName', function (req, res) {
    const {userName} = req.params
    res.status(200).json({user: userName})
})

module.exports = router