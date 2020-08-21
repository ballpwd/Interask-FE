const express = require('express');
const router = express.Router();
const Room = require('../../models/Room')

// @route  POST /api/room
// @desc   Create a room
router.post('/', async (req, res) => {
    
    try {
        const newRoom = new Room({
            owner: req.body.userId,
            roomName: req.body.roomName
        });
        const room = await newRoom.save()
        res.json(room);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
      }
});

// @route  GET /api/room
// @desc   Get all room
router.get('/', async (req, res) => {
    try {
        const room = await Room.find();
        res.json(room)
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
      }
});

// @route  GET /api/room/:room_id
// @desc   Get room by room_id

router.get('/:room_id', async (req, res) => {
    try{
        const {room_id} = req.params
        const room = await Room.findById(room_id)

        if (!req.params.room_id.match(/^[0-9a-fA-F]{24}$/) || !room) {
            return res.status(404).json({ msg: 'Room not found' });
        }

        res.json(room) 
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
      }
})

// @route  GET /api/room/owner/:user_id
// @desc   Get room by user_id(owner)

router.get('/owner/:user_id', async (req, res) => {
    try{
        const {user_id} = req.params
        const room = await Room.find({owner: user_id})

        if (!req.params.user_id.match(/^[0-9a-fA-F]{24}$/) || !room) {
            return res.status(404).json({ msg: 'Room not found' });
        }

        res.json(room) 
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
      }
})

// @route  GET /api/room/user/:user_id
// @desc   Get room by user_id(user)

router.get('/user/:user_id', async (req, res) => {
  try{
      const {user_id} = req.params
      const room = await Room.find({user: user_id})

      if (!req.params.user_id.match(/^[0-9a-fA-F]{24}$/) || !room) {
          return res.status(404).json({ msg: 'Room not found' });
      }

      res.json(room) 
  } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
})

// @route    DELETE api/room/:room_id
// @desc     Delete a room

router.delete('/:room_id', async (req, res) => {
    try {
      const {room_id} = req.params
      const room = await Room.findById(room_id);
  
      // Check for ObjectId format and room
      if (!req.params.room_id.match(/^[0-9a-fA-F]{24}$/) || !room) {
        return res.status(404).json({ msg: 'Room not found' });
      }
  
      await room.remove();
  
      res.json({ msg: 'Room removed' });
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
});

// @route  POST /api/room/join/:room_code
// @desc   Join a room
router.post('/join/:room_code', async (req, res) => {
  try {

    const {room_code} = req.params           
    const {userId} = req.body
    const room = await Room.findOne({code: room_code})
    if(!room){
      return res.status(400).json({ msg: 'Room not found' });
    }
    if(room.user.includes(userId)){
      return res.status(400).json({ msg: 'Already Joined' });
    }
    room.user.push(userId)
    await room.save();
    res.json(room);

  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route  Delete /api/room/leave/:room_id
// @desc   Leave a room
router.delete('/leave/:room_id', async (req, res) => {
  try {
    const {room_id} = req.params           
    const {userId} = req.body
    const room = await Room.findById(room_id);

    const index = room.user.indexOf(userId)
    room.user.splice(index, 1);
  
    await room.save();

    res.json(room);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route    PUT api/room/editname/:room_id
// @desc     Edit room name 

router.put('/editname/:room_id', async (req, res) => {
    try {
      const {room_id} = req.params
      const room = await Room.findById(room_id);
  
      room.roomName = req.body.roomName
  
      await room.save();
  
      res.json(room);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  });


module.exports = router;