const router = require('express').Router();
const {
  getThoughts,
  findSingleThought,
  createThought,
  deleteThought,
} = require('../../controllers/thoughtController');

router.route('/').get(getThoughts).post(createThought);

router
  .route('/:thoughtId')
  .get(findSingleThought)
  .delete(deleteThought);

module.exports = router;
