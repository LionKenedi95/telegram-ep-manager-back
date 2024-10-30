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

  if (!telegramID || typeof telegramID !== 'number') {
    console.error('Try businesses/check -> No telegramID. req.body:', req.body)
    res.json({
      error: 'No telegramID'
    })
    return
  }

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

router.post('/edit', async (req, res) => {
  const id = req.body.id

  if (!id || typeof id !== 'number') {
    console.error('Try businesses/edit -> No id. req.body:', req.body)
    res.json({
      error: 'No id'
    })
    return
  }

  if (typeof req.body.edit !== 'object') {
    console.error('Try businesses/edit -> No edit object. req.body.edit:', req.body.edit)
    res.json({
      error: 'No edit object'
    })
    return
  }

  let updatedRows = 0

  try {
    [updatedRows] = await Business.update(req.body.edit, {
      where: { id },
    });
  } catch(e) {
    console.error('Try businesses/edit -> error in query', e)
    req.json({ error: 'Error in query' })
    return
  }
  

  if (updatedRows === 0) {
    req.json({ error: 'No updated rows' })
  } else {
    req.json({ result: 'success' })
  }
});

module.exports = router;