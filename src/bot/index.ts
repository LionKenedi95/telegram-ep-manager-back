import { Telegraf } from 'telegraf'
import { config } from 'dotenv'
import { newUser } from '../db/functions/newUser.db'
import { getUser } from '../db/functions/getUser.db'

config()

const bot = new Telegraf('7952621195:AAEVLGCwBaYwwdszrp2nHw5mFvMCE0mTWAE')

bot.launch()
bot.start(ctx => {
	const { id, first_name, last_name, username } = ctx.from
	newUser(id, first_name, last_name, username)
	ctx.reply('Welcome to the bot!')
})

bot.on('my_chat_member', ctx => {
	const { id, first_name, last_name, username } = ctx.from
	getUser(id).then(user => {
		if (!user.businesses.length) {
			ctx.reply('You have no businesses yet. Create one!')
		}
	})
})

process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))
