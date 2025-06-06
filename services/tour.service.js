const fs = require('fs');
const path = require('path');

const toursFilePath = path.join(__dirname, '..', 'tp2-starter', 'tp2-starter', 'dev-data', 'data', 'tours-simple.json');

const getAllTours = () => {
    try {
        const data = fs.readFileSync(toursFilePath);
        return JSON.parse(data);
    } catch (error) {
        console.error('Error reading tours data:', error);
        return [];
    }
};

const getTourById = (id) => {
    const tours = getAllTours();
    return tours.find(tour => tour.id === id);
};

const createTour = (tourData) => {
    const tours = getAllTours();
    const newId = tours.length > 0 ? tours[tours.length - 1].id + 1 : 0;
    const newTour = { id: newId, ...tourData };

    tours.push(newTour);

    try {
        fs.writeFileSync(toursFilePath, JSON.stringify(tours));
        return newTour;
    } catch (error) {
        console.error('Error writing tours data:', error);
        throw new Error('Failed to create tour');
    }
};

const updateTour = (id, tourData) => {
    const tours = getAllTours();
    const tourIndex = tours.findIndex(tour => tour.id === id);

    if (tourIndex === -1) return null;

    const updatedTour = { ...tours[tourIndex], ...tourData, id };
    tours[tourIndex] = updatedTour;

    try {
        fs.writeFileSync(toursFilePath, JSON.stringify(tours));
        return updatedTour;
    } catch (error) {
        console.error('Error writing tours data:', error);
        throw new Error('Failed to update tour');
    }
};

const deleteTour = (id) => {
    const tours = getAllTours();
    const tourIndex = tours.findIndex(tour => tour.id === id);

    if (tourIndex === -1) return false;

    tours.splice(tourIndex, 1);

    try {
        fs.writeFileSync(toursFilePath, JSON.stringify(tours));
        return true;
    } catch (error) {
        console.error('Error writing tours data:', error);
        throw new Error('Failed to delete tour');
    }
};

module.exports = {
    getAllTours,
    getTourById,
    createTour,
    updateTour,
    deleteTour
};
