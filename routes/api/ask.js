const express = require('express');
const router = express.Router();
const Ask = require('../../models/Ask')
const User = require('../../models/User')

// @route  POST /api/ask
// @desc   Create a ask
router.post('/', async (req, res) => {
    try {
        const newAsk = new Ask({
            user: req.body.userId,
            room: req.body.roomId,
            text: req.body.text
          });
        const ask = await newAsk.save()
        res.json(ask);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
      }

});

// @route  GET /api/ask
// @desc   Get all ask
router.get('/', async (req, res) => {
    try {
        const ask = await Ask.find().populate('user', ['userName']);
        res.json(ask)
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
      }
});

// @route  GET /api/ask/:ask_id
// @desc   Get ask by ask_id

router.get('/:ask_id', async (req, res) => {
    try{
        const {ask_id} = req.params
        const ask = await Ask.findById(ask_id).populate('user', ['userName'])

        if (!req.params.id.match(/^[0-9a-fA-F]{24}$/) || !ask) {
            return res.status(404).json({ msg: 'Ask not found' });
        }
        
        res.json(ask) 
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
      }
})

// @route  GET /api/ask/room/:room_id'
// @desc   Get ask by room_id

router.get('/room/:room_id', async (req, res) => {
    try{
        const {room_id} = req.params
        const ask = await Ask.find({room: room_id}).populate('user', ['userName'])

        if (!ask) {
            return res.status(404).json({ msg: 'Ask not found' });
        }
        
        res.json(ask) 
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
      }
})

// @route  GET /api/ask/room/:room_id/:user_id'
// @desc   Get ask by roomId and user_id

router.get('/room/:room_id/:user_id', async (req, res) => {
    try{
        const {room_id,user_id} = req.params
        const ask = await Ask.find({room: room_id,user: user_id}).populate('user', ['userName'])

        if (!ask) {
            return res.status(404).json({ msg: 'Ask not found' });
        }
        
        res.json(ask) 
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
      }
})



module.exports = router;