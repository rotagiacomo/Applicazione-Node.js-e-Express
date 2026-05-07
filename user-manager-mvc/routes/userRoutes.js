// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const userController = require('../app/controllers/userController');
// Rotte
router.get('/', userController.home);
router.get('/users', userController.listUsers);
router.post('/users', userController.createUser); //richiamata dal controller che viene richiamato dal submit form della view
router.post('/users/delete/:id', userController.deleteUser);
router.post('/users/increment/:id', userController.addOne);
router.post('/users/decrement/:id', userController.removeOne);
module.exports = router;