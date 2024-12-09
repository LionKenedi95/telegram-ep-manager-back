const retrySequelizeConnect = async (sequelize, retries = 5, delay = 5000) => {
	console.log(`
      Trying to connect to the database:
      DB_HOST: ${process.env.DB_HOST}
      DB_PORT: ${process.env.DB_PORT}
      DB_USER: ${process.env.DB_USER}
      DB_PASS: ${process.env.DB_PASS}
      DB_NAME: ${process.env.DB_NAME}
      `)
	while (retries > 0) {
		console.log(
			`Trying to connect to the database. 
With config: ${JSON.stringify(sequelize.config, null, 1)}`
		)
		try {
			await sequelize.authenticate()
			console.log('Database connection has been established successfully.')
			await sequelize.sync()
			return
		} catch (err) {
			console.error(`Unable to connect to the database. Retries left: ${retries}`)
			console.error(err.message)
			retries -= 1
			await new Promise(res => setTimeout(res, delay))
		}
	}
	throw new Error('Unable to connect to the database after multiple retries.')
}

export { retrySequelizeConnect }
