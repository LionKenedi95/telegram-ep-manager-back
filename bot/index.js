const { Telegraf, Markup } = require('telegraf')
const { message } = require('telegraf/filters')
require('dotenv').config()
const bot = new Telegraf(process.env.BOT_TOKEN)

bot.start((ctx) => ctx.reply(`Calendee 📅 - сервис записи клиентов через Telegram

Легкий способ для клиента получить Вашу услугу 💙`)
)

bot.on(message('sticker'), (ctx) => ctx.reply('👍'))
bot.hears('Привет', (ctx) => ctx.reply(
  'Привет! :)'))

bot.hears('test', (ctx) => {
  const channelId = '-1002486586260'
  ctx.telegram.sendMessage(channelId, 'Test message')
  ctx.telegram.createChatInviteLink(channelId, {member_limit: 1}).then((link) => {
    ctx.reply(`Ссылка на канал: ${link.invite_link}`)
  }
  )
})



bot.on('channel_post', (ctx) => {
  console.log(`Новое сообщение из канала ${ctx.update.channel_post.chat.id}`);
  // Здесь можно добавить логику обработки сообщений
});

bot.launch()

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))

module.exports = bot