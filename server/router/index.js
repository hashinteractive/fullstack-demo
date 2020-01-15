const { Router } = require('express')
const router = Router()
const bugs = require('./bugs')

router.get('/', (req, res, next) => {
  res.send("You have reached the /api route")
})

/** /api/bugs routes **/
router.use('/bugs', bugs)

module.exports = router