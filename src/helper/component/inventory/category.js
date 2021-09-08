const { router } = require('../../../state')
const { category } = require('./model')
const app = router.Router()

app.post('/', async (req, res) => {
  try {
    const it = await category.create(req.body)
    res.status(201).send({
      status: 'ok',
      data: it
    })
  } catch (error) {
    res.status(400).send({
      status: 'fail',
      error
    })
  }
})

module.exports = app