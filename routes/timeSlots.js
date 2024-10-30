const express = require('express');
const router = express.Router();
const { TimeSlot } = require('../models');
const { where } = require('sequelize');

router.post('/timeSlots-create', async (req, res) => {
    //Создание нового таймслота

    const {
      serviceID,
      startDate,
      endDate,
      type,
    } = req.body

  const newTimeSlot = await TimeSlot.create({
    serviceID,
    startDate,
    endDate,
    type,
  });

  res.json(newTimeSlot);
});

module.exports = router;