import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import { router } from './routes'
import { db } from './db/database'
import { retrySequelizeConnect } from './db/retrySequalizeConnect'
import { initializeDatabase } from './db/initializeDatabase'

function errorHandler(err: Error, req: express.Request, res: express.Response, next: express.NextFunction) {
	console.log(next)
	console.error(err)
	res.status(500).send({ error: 'Something failed!', message: err })
}

console.log(`
  ENVIRONMENT VARIABLES:
  BOT_TOKEN: ${process.env.BOT_TOKEN}
  PORT: ${process.env.PORT}
  HOST: ${process.env.HOST}
`)

const app = express()
const port = parseInt(process.env.PORT, 10) || 3001
const host = process.env.HOST || 'localhost'

app.use(
	cors({
		origin: '*', // Разрешить запросы с любого домена
		methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // Разрешенные методы
		allowedHeaders: ['Content-Type', 'Authorization'] // Разрешенные заголовки
	})
)

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(
	'/api/',
	(res, req, next) => {
		console.log('API')
		next()
	},
	router
)

app.use(errorHandler)
;(async () => {
	try {
		await retrySequelizeConnect(db)
		console.log('Connected to the database')
		await initializeDatabase(db)
		console.log('Database initialized')
		app.listen(port, () => {
			console.log(`Server is running on ${host}:${port}`)
		})
		console.log('Server started')
	} catch (err) {
		console.error('Failed to initialize the application:', err)
	}
})()

export { app }
