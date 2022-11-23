const { User, Thought } = require('../models');

const userController = {

// get all Users
    getUsers(req, res) {
        User.find()
            .then((thoughts) => res.json(thoughts))
            .catch((err) => res.status(500).json(err));
    },

// get single User
    findSingleUser(req, res) {
        console.log('create new user function, placeholder');
        User.findOne({ _id: req.params.userId})
        .select('-__v')
        .then((user) => {
            if (!user) {
                res.status(404).json({ message: "no user with that ID"})
            } else {
                res
                .json(user)
                .status(200)
            }
        })
    },

// update a User
    updateUser(req, res) {
        console.log('placeholder for updateUser ()')
        User.findOneAndUpdate(
            { _id: req.params.userId },
            { $set: req.body },
            { runValidators: true, new: true}
        )
        .then((user) => {
            if (!user) {
                res.status(404).json({ message: "No user with this ID, please try again."})
            } else {
                res
                .status(200)
                .json(user)
            }
        })
    },

// delete a User

    deleteUser



};

module.exports = userController;
