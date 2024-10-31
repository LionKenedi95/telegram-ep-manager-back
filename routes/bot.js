const express = require('express');
const router = express.Router();
const bot = require('../bot')

router.post('/first-service-link', async (req, res) => {
  const {
    chatId,
    link,
  } = req.body

  console.log('first-service-link', chatId, link)

  try {
    bot.telegram.sendMessage(chatId, `Ура 🎉 Вы создали свою первую услуг и клиентам можно отправить на нее ссылку💙
      Ссылка была автоматически скопирована. Вот она:

      ${link}

      Есть много способов как дать клиенту возможность записаться на Ваши услуги - здесь подробнее 👉
      Добавить другие услуги и редактировать их всегда можно в приложении 👉`)
  } catch (e) {
    console.error('Cant write message to user', e)
  }

  res.json({})
});

router.post('/new-appointment', async (req, res) => {
  const {
    chatId,
    info,
  } = req.body

  try {
    bot.telegram.sendMessage(chatId, `❕Новая запись клиента: ${info}`)
  } catch (e) {
    console.error('Cant write message to user', e)
  }

  res.json({})
});

module.exports = router;