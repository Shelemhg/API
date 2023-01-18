const express = require('express');
const router = express.Router();

const contactsController = require('../controllers/contacts');

// Creates a new Router instance and registers a GET request handler for the '/' route. Then the "contactsController.getAll" handler function is passed to the get methig.

//When you receive a get with '/' pass it to contactsController.getAll
router.get('/', contactsController.getAll);

router.get('/:id', contactsController.getSingle);

// TODO:  router.post SOMETHING contactsController.createContact
router.post('/', contactsController.createContact);

// TODO: router.put SOMETHING contactsController.updateContact
router.put('/:id', contactsController.updateContact);

// TODO: router.delete SOMETHING contactsController.deleteContact
router.delete('/:id', contactsController.deleteContact);

module.exports = router;
//FINISHED