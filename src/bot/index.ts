import { Telegraf } from 'telegraf'
import { config } from 'dotenv'

config()

const bot = new Telegraf('7952621195:AAEVLGCwBaYwwdszrp2nHw5mFvMCE0mTWAE')

bot.start(ctx => ctx.reply('Welcome!'))
bot.help(ctx => ctx.reply('Send me a sticker'))
bot.on('my_chat_member', ctx => ctx.reply('👍'))
bot.launch()
