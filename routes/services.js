const express = require('express');
const router = express.Router();
const { Business, Service } = require('../models');
const { where } = require('sequelize');

router.post('/create', async (req, res) => {
    //Создание нового сервиса

    const {
        businessID,
        title,
        description,
      } = req.body
  
    const newService = await Service.create({
        businessID,
        title,
        description,
    });

    res.json(newService);
});

module.exports = router;