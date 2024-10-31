const { Telegraf, Markup } = require('telegraf')
const { message } = require('telegraf/filters')

const bot = new Telegraf(process.env.BOT_TOKEN)

bot.start((ctx) => ctx.reply('Calendee - сервис записи клиентов'))
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

module.exports = bot