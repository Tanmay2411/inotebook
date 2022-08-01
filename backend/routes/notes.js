const express = require('express')
const fetchUser = require('../middleware/fetchUser')
const router = express.Router();
const Note = require('../models/Note')
const { body, validationResult } = require('express-validator');

//
router.get('/fetchallnotes', fetchUser, async (req, res) => {
    try {
        const notes = await Note.find({ user: req.user.id });
        res.json(notes);
    } catch (error) {
        console.log(error);
        res.status(500).send("Some Error Occured");
    }
})
//Router 2 to add node
router.post('/addnote', fetchUser, [
    body('title').isLength({ min: 3 }),
    body('description').isLength({ min: 5 })
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const { title, description, tag } = req.body;
    try {
        const note = new Note({
            title,
            description,
            tag,
            user: req.user.id
        })
        const savedNote = await note.save();
        res.send(savedNote);
    } catch (error) {
        console.log(error);
        res.status(500).send("Some Error Occured");
    }
})
// Router 3 update note
router.put('/updatenote/:id', fetchUser, async (req, res) => {
    try {
        const { title, description, tag } = req.body;
        const newNote = {};
        if (title) { newNote.title = title };
        if (description) { newNote.description = description };
        if (tag) { newNote.tag = tag };

        let note = await Note.findById(req.params.id);
        if (!note) {
            return res.status(404).send("Not Found");
        }
        if (note.user.toString() !== req.user.id) {
            return res.status(401).send("Not Allowed");
        }
        note = await Note.findByIdAndUpdate(req.params.id, { $set: newNote }, { new: true });
        res.json(note);
    } catch (error) {
        console.log(error);
        res.status(500).send("Some Error Occured");
    }
})
// Router 4: To delete a Note
router.delete('/deletenote/:id', fetchUser, async (req, res) => {
    try {
        let note = await Note.findById(req.params.id);
        if (!note) {
            return res.status(404).send("Not Found");
        }
        if (note.user.toString() !== req.user.id) {
            return res.status(401).send("Not Allowed");
        }
        note = await Note.findByIdAndDelete(req.params.id);
        res.json(note);
    } catch (error) {
        console.log(error);
        res.status(500).send("Some Error Occured");
    }

})
module.exports = router