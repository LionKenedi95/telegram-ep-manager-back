const express = require('express');
const router = express.Router();
const User = require('../models/user');

// Получение всех пользователей
router.get('/', async (req, res) => {
  const users = await User.findAll();
  res.json(users);
});

// Создание нового пользователя
router.post('/', async (req, res) => {
  const { name, email } = req.body;
  const user = await User.create({ name, email });
  res.json(user);
});

module.exports = router;