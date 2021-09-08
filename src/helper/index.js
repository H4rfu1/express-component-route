module.exports = {
  model: function () {
    require('./component/inventory/model')
    require('./component/user/model')
  },
  gateway: function () {
    require('./component/user/http')()
    require('./component/inventory/http')
  }
}
