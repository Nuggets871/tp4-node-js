const tourService = require('../services/tour.service');

const getAllTours = (req, res) => {
    try {
        const tours = tourService.getAllTours();
        res.status(200).json({
            status: 'success',
            results: tours.length,
            data: { tours }
        });
    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: error.message
        });
    }
};

const getTourById = (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const tour = tourService.getTourById(id);

        if (!tour) {
            return res.status(404).json({
                status: 'fail',
                message: `Tour with ID ${id} not found`
            });
        }

        res.status(200).json({
            status: 'success',
            data: { tour }
        });
    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: error.message
        });
    }
};

const createTour = (req, res) => {
    try {
        const newTour = tourService.createTour(req.body);

        res.status(201).json({
            status: 'success',
            data: { tour: newTour }
        });
    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: error.message
        });
    }
};

const updateTour = (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const updatedTour = tourService.updateTour(id, req.body);

        if (!updatedTour) {
            return res.status(404).json({
                status: 'fail',
                message: `Tour with ID ${id} not found`
            });
        }

        res.status(200).json({
            status: 'success',
            data: { tour: updatedTour }
        });
    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: error.message
        });
    }
};

const deleteTour = (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const result = tourService.deleteTour(id);

        if (!result) {
            return res.status(404).json({
                status: 'fail',
                message: `Tour with ID ${id} not found`
            });
        }

        res.status(204).json({
            status: 'success',
            data: null
        });
    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: error.message
        });
    }
};

const checkRequiredFields = (req, res, next) => {
    const requiredFields = ['name', 'duration', 'maxGroupSize', 'difficulty', 'price', 'summary', 'description'];
    const missingFields = [];

    requiredFields.forEach(field => {
        if (!req.body[field]) {
            missingFields.push(field);
        }
    });

    if (missingFields.length > 0) {
        return res.status(400).json({
            status: 'fail',
            message: `Missing required fields: ${missingFields.join(', ')}`
        });
    }

    next();
};

module.exports = {
    getAllTours,
    getTourById,
    createTour,
    updateTour,
    deleteTour,
    checkRequiredFields
};
