const { Telegraf, Markup } = require('telegraf')
const { message } = require('telegraf/filters')

require('dotenv').config()

const bot = new Telegraf(process.env.BOT_TOKEN)

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

async function testDB() {
  try {
      await sequelize.authenticate();
      console.log('Подключение к базе данных успешно установлено.');

      await sequelize.sync({ force: true });
      console.log("Все модели синхронизированы.");
  } catch (error) {
      console.error('Ошибка подключения к базе данных:', error);
  } finally {
      await sequelize.close();
      console.log('Подключение закрыто.');
  }
}

testDB();


bot.start((ctx) => ctx.reply('Привет, это Таппер!'))
bot.help((ctx) => ctx.reply('Покажи свой любимый стикер :)'))
bot.on(message('sticker'), (ctx) => ctx.reply('👍'))
bot.hears('Привет', (ctx) => ctx.reply(
  'Привет! :)',
  Markup.keyboard([
    Markup.button.webApp(
      'Старт!',
      process.env.WEB_APP_URL,
    )
  ])
))

bot.launch()

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))