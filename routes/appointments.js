const express = require('express');
const router = express.Router();
const { Appointment } = require('../models');
const { where } = require('sequelize');

router.post('/create', async (req, res) => {
    //создание нового аппоинтмента

    const {
        serviceID,
        clientID,
        comment,
    } = req.body

    try {
    const newAppointment = await Appointment.create({
        serviceID,
        clientID,
        comment,
    });

    res.json(newAppointment);
    } catch(e) {
        console.error('Try businesses/edit -> error in query', e)
        res.json({ error: 'Error in query' })
        return
      }
}); 

module.exports = router;
