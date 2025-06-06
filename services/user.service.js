const fs = require('fs');
const path = require('path');

const usersFilePath = path.join(__dirname, '..', 'tp2-starter', 'tp2-starter', 'dev-data', 'data', 'users.json');

const getAllUsers = () => {
    try {
        const data = fs.readFileSync(usersFilePath);
        return JSON.parse(data);
    } catch (error) {
        console.error('Error reading users data:', error);
        return [];
    }
};

const getUserById = (id) => {
    const users = getAllUsers();
    return users.find(user => user._id === id);
};

const createUser = (userData) => {
    const users = getAllUsers();
    const newId = `user-${Date.now()}`;
    const newUser = { _id: newId, ...userData };

    users.push(newUser);

    try {
        fs.writeFileSync(usersFilePath, JSON.stringify(users));
        return newUser;
    } catch (error) {
        console.error('Error writing users data:', error);
        throw new Error('Failed to create user');
    }
};

const updateUser = (id, userData) => {
    const users = getAllUsers();
    const userIndex = users.findIndex(user => user._id === id);

    if (userIndex === -1) return null;

    const updatedUser = { ...users[userIndex], ...userData, _id: id };
    users[userIndex] = updatedUser;

    try {
        fs.writeFileSync(usersFilePath, JSON.stringify(users));
        return updatedUser;
    } catch (error) {
        console.error('Error writing users data:', error);
        throw new Error('Failed to update user');
    }
};

const deleteUser = (id) => {
    const users = getAllUsers();
    const userIndex = users.findIndex(user => user._id === id);

    if (userIndex === -1) return false;

    users.splice(userIndex, 1);

    try {
        fs.writeFileSync(usersFilePath, JSON.stringify(users));
        return true;
    } catch (error) {
        console.error('Error writing users data:', error);
        throw new Error('Failed to delete user');
    }
};

module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
};
