const userService = require('../services/user.service');

const getAllUsers = async (req, res) => {
    try {
        const users = await userService.getAllUsers();
        res.status(200).json({
            status: 'success',
            results: users.length,
            data: { users }
        });
    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: error.message
        });
    }
};

const getUserById = async (req, res) => {
    try {
        const id = req.params.id;
        const user = await userService.getUserById(id);

        if (!user) {
            return res.status(404).json({
                status: 'fail',
                message: `User with ID ${id} not found`
            });
        }

        res.status(200).json({
            status: 'success',
            data: { user }
        });
    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: error.message
        });
    }
};

const createUser = async (req, res) => {
    try {
        const newUser = await userService.createUser(req.body);

        res.status(201).json({
            status: 'success',
            data: { user: newUser }
        });
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: error.message
        });
    }
};

const updateUser = async (req, res) => {
    try {
        const id = req.params.id;
        const updatedUser = await userService.updateUser(id, req.body);

        if (!updatedUser) {
            return res.status(404).json({
                status: 'fail',
                message: `User with ID ${id} not found`
            });
        }

        res.status(200).json({
            status: 'success',
            data: { user: updatedUser }
        });
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: error.message
        });
    }
};

const deleteUser = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await userService.deleteUser(id);

        if (!result) {
            return res.status(404).json({
                status: 'fail',
                message: `User with ID ${id} not found`
            });
        }

        res.status(204).json({
            status: 'success',
            data: null
        });
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: error.message
        });
    }
};

const checkRequiredFields = (req, res, next) => {
    const requiredFields = ['name', 'email', 'password'];
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

const updateUserRole = async (req, res) => {
    try {
        const id = req.params.id;
        const { role } = req.body;

        if (!role) {
            return res.status(400).json({
                status: 'fail',
                message: 'Role is required'
            });
        }

        const updatedUser = await userService.updateUserRole(id, role);

        res.status(200).json({
            status: 'success',
            data: { user: updatedUser }
        });
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: error.message
        });
    }
};

module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    updateUserRole,
    checkRequiredFields
};
