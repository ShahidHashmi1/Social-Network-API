const { Thought, User } = require('../models');

const thoughtController = {
// get all thoughts
    getThoughts(req, res) {
        Thought.find()
            .then((thoughts) => res.json(thoughts))
            .catch((err) => res.status(500).json(err));
    },
// get thought by ID
    findSingleThought(req, res) {
        Thought.findById({_id: req.params.thoughtId})
        .select('-__v')
        .then((thought) => {
            if (!thought) {
                res.status(404).json({ message: 'No thought with that ID'})
            } else {
                res
                .status(200)
                .json(thought)
            }
        })
    },
// create thought
    createThought(req, res) {
        Thought.create(req.body)
            .then((thought) => res.json(thought))
            .catch((err) => {
                console.log(err);
                return res.status(500).json(err);
            });
    },
// delete thought by ID
    deleteThought(req, res) {
        Thought.findOneAndDelete({ _id: req.params.thoughtId })
            .then((thought) => {
                if (!thought) {
                    res.status(404).json({ message: 'No thought with that ID'})
                } else {
                    User.deleteMany({
                        _id: { $in: thought.thoughts }
                    })
                }
            }
            )
            .then(() => res.json({ message: 'Thought and User deleted!' }))
            .catch((err) => res.status(500).json(err));
    }
};

module.exports = thoughtController;
