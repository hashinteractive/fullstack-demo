const { Router } = require('express')
const router = Router()
const { Bug } = require('../db/models')

/** Get All Route **/
router.get('/', async (req, res, next) => {
  try{
    let bugs = await Bug.find()
    res.status(200).json(bugs)
  }catch(err){
    console.log(err)
    next(err)
  }
})

/** Create Route **/
router.post('/', async (req, res, next) => {
  const { body: bug } = req
  const bugInstance = new Bug(bug)
  try{
    let saved = await bugInstance.save()
    res.status(201).json(saved)
  }catch(err){
    console.log(err)
    next(err)
  }
})

/** Delete Route **/
router.delete('/:id', async (req, res, next) => {
  const { params: { id } } = req
  try{
    await Bug.findByIdAndDelete(id)
    res.json({ id })
  }catch(err){
    console.log(err)
    next(err)
  }
})

module.exports = router