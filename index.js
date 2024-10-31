
require('dotenv').config()
const cors = require('cors');
const express = require('express');
const { Sequelize, DataTypes } = require('sequelize');

// Создаем подключение к базе данных
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    dialect: 'mysql'
  },
);

async function runDB() {
  try {
    await sequelize.authenticate();
    console.log('Database available');
  } catch (error) {
    console.error('Database error: ', error);
  }
}

async function stopDB() {
  await sequelize.close();
  console.log('Database down');
}

runDB()

// Enable graceful stop
process.once('SIGINT', () => stopDB())
process.once('SIGTERM', () => stopDB())

const app = express();
const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || '0.0.0.0';

// Middleware для работы с JSON
app.use(express.json());

if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
  app.use(cors())
}

// Маршрут для проверки API
app.get('/', (req, res) => {
  res.send('Succeeded API test'); 
});

const businessesRoutes = require('./routes/businesses')
const servisesRoutes =  require('./routes/services')
const timeSlotsRoutes = require('./routes/timeSlots')
const botRoutes = require('./routes/bot')

app.use('/api/businesses', businessesRoutes)
app.use('/api/services', servisesRoutes)
app.use('/api/time-slots', timeSlotsRoutes)
app.use('/api/bot', botRoutes)

const server = app.listen(PORT, HOST, () => {
  console.log(`Server working on http://localhost:${PORT}`);
});

process.once('SIGINT', () => {
  console.log('Server stoping...')
  server.close(() => console.log('Server down'))
})
process.once('SIGTERM', () => {
  console.log('Server stoping...')
  server.close(() => console.log('Server down'))
})

const bot = require('./bot')

console.log('bot launched with token', bot.telegram.token)