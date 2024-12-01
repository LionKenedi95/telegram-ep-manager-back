import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors';
import { router } from './routes'
import { db } from './db/database'
import { retrySequelizeConnect } from './db/retrySequalizeConnect'
import { initializeDatabase } from './db/models/initializeDatabase'

function errorHandler(
	err: Error,
	req: express.Request,
	res: express.Response,
	next: express.NextFunction,
) {
	console.log(next)
	console.error(err)
	res.status(500).send('Internal server error')
}

// import { router } from './routes'

console.log(`
  ENVIRONMENT VARIABLES:
  BOT_TOKEN: ${process.env.BOT_TOKEN}
  PORT: ${process.env.PORT}
  HOST: ${process.env.HOST}
`);

// saveHash(process.env.BOT_TOKEN, 'WebAppData')

const app = express()
const port = parseInt(process.env.PORT, 10)  || 3001
const host = process.env.HOST || 'localhost'

app.use(cors());

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/api/', router)

app.use(errorHandler)

// Вынести в отдельный модуль
retrySequelizeConnect(db)
.then(() => {
	console.log('Connected to the database')
	initializeDatabase(db)
})
.then(() => {
	console.log('Database initialized')
})
.then(() => {
	app.listen(port, () => {
		console.log(`Server is running on ${host}:${port}`)
	})
	console.log('Server started')
})
.then(() => {
	db.sync()
	console.log('Everything is ready')
})
.catch((err) => {
	console.error(err)
})