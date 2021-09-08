const { express } = require('../../../state')
const { jwt } = require('../../lib')


express.use('/api/inventory/product', jwt.checkAuth, require('./product'))
express.use('/api/inventory/category', require('./category'))
