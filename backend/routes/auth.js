const express = require('express');
const User = require('../models/User');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const fetchUser = require('../middleware/fetchUser')
const JWT_SECRET = "Something_secret";

// Route for creating new user
router.post('/createUser', [
    body('email').isEmail(),
    body('password').isLength({ min: 5 }),
    body('name').isLength({ min: 3 })
],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        try {
            let user = await User.findOne({ email: req.body.email });
            if (user) {
                return res.status(400).json({ error: "This email is already registered." })
            }
            else {
                const salt = await bcrypt.genSalt(10);
                const secPass = await bcrypt.hash(req.body.password, salt);
                console.log(req.body);
                user = await User.create({
                    name: req.body.name,
                    email: req.body.email,
                    password: secPass
                })
                const Data = {
                    user: {
                        id: user.id
                    }
                }
                const token = jwt.sign(Data, JWT_SECRET);
                console.log(token);
                res.json({ token });
            }
        } catch (error) {
            console.log(error);
            res.status(500).send("Some Error Occured");
        }

    })

// Route for login user 
router.post('/login', [

    body('email').isEmail(),
    body('password').exists()
], async (req, res) => {
    let success = false;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ success, errors: errors.array() });
    }

    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ success, error: "Please enter correct credentials" });
        }
        const passwordCompare = await bcrypt.compare(password, user.password);
        if (!passwordCompare) {
            return res.status(400).json({ success, error: "Please enter correct credentials" });
        }
        const Data = {
            user: {
                id: user.id
            }
        }
        const token = jwt.sign(Data, JWT_SECRET);
        success = true;
        return res.status(200).json({ success, token });

    } catch (error) {
        console.log(error);
        res.status(500).send("Some Error Occured");
    }
})
// Route to get user details
router.post('/getuser', fetchUser,
    async (req, res) => {
        try {
            const userId = req.user.id;
            const userData = await User.findById(userId).select("-password");
            res.json(userData)
        } catch (error) {
            console.log(error);
            res.status(500).send("Some Error Occured");
        }
    }
)
module.exports = router