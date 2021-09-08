const { router } = require('../../../state')
const { product } = require('./model')
const app = router.Router()
// const { jwt } = require('../../lib')

app.post('/', async (req, res) => {
  try {
    const it = await product.create(req.body)
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
