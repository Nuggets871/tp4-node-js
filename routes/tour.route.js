const express = require('express');
const tourController = require('../controllers/tour.controller');

const router = express.Router();

router
    .route('/')
    .get(tourController.getAllTours)
    .post(tourController.checkRequiredFields, tourController.createTour);

router
    .route('/:id')
    .get(tourController.getTourById)
    .put(tourController.updateTour)
    .delete(tourController.deleteTour);

module.exports = router;