if (process.env.NODE_ENV != 'production') {
  require('dotenv').config()
}

const { DBHOST, DBUSER, DBPASS, DBNAME, DBPORT, DBSYSTEM, SECRET_JWT, PORT } =
  process.env

const config = {
  host: DBHOST,
  dbName: DBNAME,
  user: DBUSER,
  password: DBPASS,
  port: DBPORT,
  systemDefault: DBSYSTEM
}

module.exports = {
  express: require('./express').app,
  router: require('./express').express,
  orm: require('sequelize'),
  sequelize: require('./sequelize')(config),
  secretJWT: SECRET_JWT,
  port: PORT
}
