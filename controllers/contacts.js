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

    const createContact = async (req, res, next) => {
    


    }

    // TODO: const updateContact

    // TODO: const deleteContact





    module.exports = { getAll, getSingle };
    //FINISHED