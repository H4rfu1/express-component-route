const { verify, sign } = require('jsonwebtoken')
const { secretJWT } = require('../../state')
module.exports = class {
  static createToken(payload) {
    const token = sign(payload, secretJWT, { expiresIn: '1d' })
    return Promise.resolve(token)
  }

  static checkAuth(req, res, next) {
    return verify(req.headers['touta-key'], secretJWT, (err, data) => {
      if (err) {
        return res.status(401).send({
          status: 'fail',
          message: 'unauthorized'
        })
      }
      next()
    })
  }
}
