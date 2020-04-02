const express = require('express');
const router = express.Router();
const User = require('../../models/User')

// @route  POST /api/user
// @desc   Create a user
router.post('/', async (req, res) => {
    try {
        const user = new User({
            email: req.body.email,
            userName: req.body.userName
        });
        await user.save()
        res.status(201).end()
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
      }
    
});

// @route  GET /api/user
// @desc   Get all user
router.get('/', async (req, res) => {
    try {
        const user = await User.find();
        res.json(user)
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
      }
});


module.exports = router;