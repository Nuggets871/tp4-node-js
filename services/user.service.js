const User = require('../models/user.model');

const getAllUsers = async () => {
    try {
        const users = await User.find();
        return users;
    } catch (error) {
        console.error('Error fetching users:', error);
        throw error;
    }
};

const getUserById = async (id) => {
    try {
        const user = await User.findById(id);
        return user;
    } catch (error) {
        console.error('Error fetching user:', error);
        throw error;
    }
};

const createUser = async (userData) => {
    try {
        const newUser = await User.create(userData);
        return newUser;
    } catch (error) {
        console.error('Error creating user:', error);
        throw error;
    }
};

const updateUser = async (id, userData) => {
    try {
        const { password, passwordConfirm, role, ...allowedFields } = userData;

        const updatedUser = await User.findByIdAndUpdate(
            id, 
            allowedFields, 
            { new: true, runValidators: true }
        );

        return updatedUser;
    } catch (error) {
        console.error('Error updating user:', error);
        throw error;
    }
};

const deleteUser = async (id) => {
    try {
        const result = await User.findByIdAndDelete(id);
        return !!result;
    } catch (error) {
        console.error('Error deleting user:', error);
        throw error;
    }
};

const updateUserRole = async (id, role) => {
    try {
        if (!['user', 'guide', 'lead-guide', 'admin'].includes(role)) {
            throw new Error('Invalid role. Role must be one of: user, guide, lead-guide, admin');
        }

        const updatedUser = await User.findByIdAndUpdate(
            id,
            { role },
            { new: true, runValidators: true }
        );

        if (!updatedUser) {
            throw new Error(`User with ID ${id} not found`);
        }

        return updatedUser;
    } catch (error) {
        console.error('Error updating user role:', error);
        throw error;
    }
};

module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    updateUserRole
};
