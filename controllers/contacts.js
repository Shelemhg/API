    const mongodb = require('../db/connect');
    const ObjectId = require('mongodb').ObjectId;

    // When a GET request is received, this function is executed and it prints to the browser all the contacts in the database.
    const getAll = async (req, res, next) => {
    const result = await mongodb.getDb().db().collection('contacts').find();
    result.toArray().then((lists) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(lists);
    });
    };

    // When a GET request is received, this function expects an ID and prints to the web browser all the info of the ID
    const getSingle = async (req, res, next) => {
    const userId = new ObjectId(req.params.id);
    const result = await mongodb
        .getDb()
        .db()
        .collection('contacts')
        .find({ _id: userId });
    result.toArray().then((lists) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(lists[0]);
    });
    };

    // TODO:  const createContact
    const createContact = async (req, res) => {
        // const userData = new ObjectId(req.params.data);
        const newContact = {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            favoriteColor: req.body.favoriteColor,
            birthday: req.body.birthday
        };
        const response = await mongodb    
            .getDb()
            .db()
            .collection('contacts')
            .insertOne(newContact);
        if (response.acknowledged) {
            res.status(201).json(response);
            console.log('Info saved to DB succesfully');
        } else {
            res.status(500).json(response.error || 'Some error occurred while creating the contact.');
            console.log('Upload of info failed.');
        }        
    };

    // TODO: const updateContact

    // TODO: const deleteContact
    module.exports = { getAll, getSingle, createContact};
    //FINISHED