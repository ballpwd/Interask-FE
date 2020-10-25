const express = require('express');
const passport = require('passport');
const router = express.Router();
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys')
const auth = require('../../middleware/authCheck');
const User = require('../../models/User')
const storeRedirect = require('../../middleware/storeRedirect')

// @route    Get api/auth/google
// @desc     Authenticate user 
// @access   Public
router.get(
    '/google',
    storeRedirect,
    passport.authenticate("google", { scope: ["profile", "email"] })
);

router.get(
    '/google/callback',
    passport.authenticate("google", {  scope: ["profile", "email"] }),
    (req, res) => {
        try {
            payload = {
                user: {
                    id: req.user.id
                  }
            }
            jwt.sign(
                payload,
                keys.jwtSecret,
                {expiresIn: 360000 },
                (err, token) => {
                    if (err) throw err;    
                    const redirect = req.session.redirectTo
                    if(redirect.includes('?')){
                        res.status(200).redirect(redirect+'&token='+token)
                    }else{
                        res.status(200).redirect(redirect+'?token='+token)
                    }
                    
                });   
        } catch (error) {
            console.error(err.message);
            res.status(500).send('Server error');
        }
    } 
);

// @route    GET api/auth/current_user
// @desc     Get user by token
// @access   Private
router.get('/current_user', auth, async (req, res) => {
    try {
        const user_id = req.user.id
        const user = await User.findById(user_id)
        if(!user){
            return res.status(404).json({ msg: 'User not found' });   
        }
        res.json(user);
      } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
      }
});

module.exports = router;