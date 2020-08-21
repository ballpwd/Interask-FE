const express = require('express');
const passport = require('passport');
const router = express.Router();
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys')
const authCheck = require('../../middleware/authCheck');
const User = require('../../models/User')

// @route    Get api/auth/google
// @desc     Authenticate user 
// @access   Public
router.get(
    '/google',
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
            jwt.sign(payload, keys.jwtSecret, {expiresIn:'5 min'}, (err, token) => {
                if(err){
                    if (err) throw err;
                } else {
                    // res.status(200).cookie('token', token, {httpOnly: true}).redirect("/")
                    res.status(200).cookie('token', token).redirect("/")
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
router.get('/current_user',authCheck, async (req, res) => {
    try {
        const user = await User.findById(req.user.id)
        res.json(user);
      } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
      }
});


router.get('/google/redirect',passport.authenticate('google'),(req,res)=>{
    res.redirect('/profile/');
})

module.exports = router;