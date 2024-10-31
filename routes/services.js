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

const getServicesByBusinessID = async (businessID, res) => {
    try {
        const services = await Service.findAll({ where: { businessID }})

        res.json(services)
    } catch (e) {
        console.error('Cant load info about services by businessID', e)
        res.json({ error: 'Cant load info about services by businessID' })
    }
}

const getServicesByIDs = async (IDs, res) => {
    try {
        const services = await Service.findAll({ where: { id: IDs }})

        res.json(services)
    } catch (e) {
        console.error('Cant load info about services by IDs', e)
        res.json({ error: 'Cant load info about services by IDs' })
    }
}

router.post('/get-service', async (req, res) => {
    const {
        businessID,
        serviceIDs,
    } = req.body;

    if (businessID && !serviceIDs) {
        getServicesByBusinessID(businessID, res)
        return
    }

    if (Array.isArray(serviceIDs) && serviceIDs.length) {
        getServicesByIDs(serviceIDs, res)
    }
})

module.exports = router;