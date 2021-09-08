const { express } = require('../../../state')
const { users } = require('./model')
const { jwt } = require('../../lib')

module.exports = () => {
  express.post('/api/login', async (req, res) => {
    try {
      const { username, password } = req.body
      const checkName = await users.findOne({ where: { username: username } })
      if (checkName == null)
        return res
          .status(401)
          .send({ status: 'fail', message: 'username invalid' })

      const token = await jwt.createToken({ username, password })
      res.status(201).send({
        status: 'ok',
        accessTokens: token
      })
    } catch (error) {
      res.status(400).send({
        status: 'fail',
        err: error
      })
    }
  })
}
