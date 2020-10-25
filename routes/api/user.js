const express = require('express');
const router = express.Router();
const User = require('../../models/User')

// @route  POST /api/user
// @desc   Create a user
// @access   Public
router.post('/', async (req, res) => {
    const {email,userName} = req.body

    if (!email) {
        return res.status(404).json({ msg: 'Invalid email' });
    }
    if (!userName) {
        return res.status(404).json({ msg: 'Invalid userName' });
    }
    const acc = await Room.findOne({email: email})
    if(acc){
        return res.status(403).json({ msg: 'Already have this email' });    
    }

    try {
        const user = new User({
            email: email,
            userName: userName
        });
        
        await user.save()
        res.status(201).end()
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
      }
    
});

module.exports = router;