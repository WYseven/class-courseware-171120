const express = require('express')
const router = express.Router()

router.get('/a',function name(req,res) {
  res.send('ok')
})

module.exports = router