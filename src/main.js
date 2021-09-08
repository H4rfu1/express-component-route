const { gateway } = require('./helper')
const { express, port } = require('./state')

const run = () => {
  //run all endpoint
  gateway()
  express.listen(port, () => console.log('runing port ==> ' + port))
}

run()