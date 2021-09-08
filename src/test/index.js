const { sequelize } = require('../state')
const { model } = require('../helper')
const { users } = require('../helper/component/user/model')
const test = class {
  static syncdb = () => {
    model()
    sequelize.sync({ force: false, alter: true })
  }

  static createAdmin = async () => {
    try {
      const it = await users.create({ username: 'admin', password: 'admin' })
      console.log('admin login ====>', it)
    } catch (error) {
      throw new Error(error)
    }
  }

  static run() {
    this.syncdb()
    // this.createAdmin()
  }
}

test.run()
