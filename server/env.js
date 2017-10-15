const env = {
  NODE_ENV: process.env.NODE_ENV || 'development',
  MONGOURI: process.env.MONGO_URI || 'localhost',
  AUTH_SECRET_KEY: process.env.AUTH_SECRET_KEY || 'temp',
  PORT: process.env.PORT || 8080
}

module.exports = env