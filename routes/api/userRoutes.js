const router = require('express').Router();
const {
    getUsers,
    getSingleUser,
    createUser,
    updateUser,
    deleteUser,
} = require('../../controllers/userController')

//localhost:3001/api/user
router.route('/').get(getUsers).post(createUser);


////localhost:3001/api/user/:userId
router
  .route('/:userId')
  .get(getSingleUser)
  .put(updateUser)
  .delete(deleteUser);

module.exports = router;


//TODO: /api/users/:userId/friends/:friendId