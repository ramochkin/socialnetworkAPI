const router = require('express').Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  deleteThought,
  updateThought,
  addReaction,
  removeReaction,
} = require('../../controllers/thoughtController');

// /api/thought
router.route('/').get(getThoughts).post(createThought);

// /api/thought/:thoughtId
router.route('/:thoughtId').get(getSingleThought).delete(deleteThought).put(updateThought);

// /api/thought/:thoughtId/reaction
router.route('/:thoughtId/reaction').post(addReaction);

// /api/thought/:thoughtId/reaction/:reactionId'
router.route('/:thoughtId/reaction/:reactionId').delete(removeReaction);

module.exports = router;
