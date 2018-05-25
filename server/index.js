const Express = require('express')
const app = new Express()
const application = require('./setup')
const cluster = require('cluster')
const os = require('os')

if (cluster.isMaster) {
  for (let i = 0; i < os.cpus().length; i++) {
    cluster.fork()
  }

  cluster.on('online', (worker) => {
    process.stdout.write('Worker ' + worker.process.pid + ' has come online \n')
  })

  cluster.on('exit', (worker, code, signal) => {
    process.stdout.write(worker.process.pid + ' died with code ' + code + ' and signal ' + signal + '\n')

    process.stdout.write('Reviving worker.. \n')
    cluster.fork()
  })
} else {
  application.instantiateApplicationDefaults(app);

  application.setupApi(app)

  application.start(app)
}