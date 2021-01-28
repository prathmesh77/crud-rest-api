const { json } = require('body-parser');
const express = require('express');
const router = express.Router();

const Book = require('../models/book');

//get all data
router.get('/', async (req, res) => {
    try {
        const getPosts = await Book.find();
        res.json(getPosts);
    } catch (err) {
        res.json({ message: err.response  });
    }
});

//submit a data
router.post('/', async (req,res) => {
    const book = new Book({
        name: req.body.name,
        author: req.body.author,
        description: req.body.description
    });
    try {
        const addBook = await book.save();
        res.json(addBook);
    } catch (err) {
        res.json({ message: err });
    }
});

//get a specific data
router.get('/:bookId', async (req, res) => {
    try {
        const bookById = await Book.findById(req.params.bookId);
        res.json(bookById);
    } catch (err) {
        res.json({ message: err });
    }
})

//delete data
router.delete('/:bookId', async (req, res) => {
    try {
        const removeBook = await Book.remove({_id:req.params.bookId});
        res.json(removeBook);
    } catch (err) {
        res.json({ message: err });
    }
})

//update specific data
router.put('/:bookId', async (req, res) => {
    try {
        const updateBook = await Book.findByIdAndUpdate(req.params.bookId, {
            name: req.body.name,
            author:req.body.author,
            description: req.body.description
        }, { new: true });
        res.json(updateBook);
    } catch (err) {
        res.json({ message: err });
    }
})

module.exports = router;