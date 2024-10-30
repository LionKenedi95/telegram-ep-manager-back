const express = require('express');
const router = express.Router();
const { Business, Service } = require('../models');
const { where } = require('sequelize');

// Получение одного бизнеса
router.get('/:id', async (req, res) => {
  const id = parseInt(req.params.id)
  console.log('GET business with id', id)
  const business = await Business.findByPk(id, { 
    include: [
      {
        model: Service,
        as: 'services'
      }
    ]
  });
  res.json(business);
});

router.post('/check', async (req, res) => {
  const {
    telegramID,
    language,
    username,
    firstName,
    lastName,
  } = req.body

  const business = await Business.findOne({
    where: {
       telegramID
    }
  });

  if (business) {
    res.json(business)
    return
  } 

  const newBusiness = await Business.create({
    telegramID,
    language,
    username,
    firstName,
    lastName,
  });

  res.json(newBusiness);
});

module.exports = router;