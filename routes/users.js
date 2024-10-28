const express = require('express');
const router = express.Router();
const { User, TimeSlot } = require('../models');
const { where } = require('sequelize');

// Получение одного пользователя
router.get('/:id', async (req, res) => {
  const id = parseInt(req.params.id)
  console.log('GET user with id', id)
  const user = await User.findByPk(id, {
    include: [
      {
        model: TimeSlot,
        as: 'timeSlots'
      }
    ]
  });
  res.json(user);
});

router.post('/create', async (req, res) => {
  console.log('req.body', req.body)
  const {
    telegramID,
    language,
    username,
    firstName,
    lastName,
  } = req.body;

  const user = await User.create({
    telegramID,
    language,
    username,
    firstName,
    lastName,
  });

  res.json(user);
});

router.post('/check', async (req, res) => {
  const {
    telegramID,
    language,
    username,
    firstName,
    lastName,
  } = req.body

  const user = await User.findOne({
    where: {
       telegramID
    }
  })

  if (user) {
    res.json(user)
    return
  } 

  const newUser = await User.create({
    telegramID,
    language,
    username,
    firstName,
    lastName,
  })

  res.json(newUser)
})

module.exports = router;