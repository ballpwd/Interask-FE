const express = require("express");
const router = express.Router();
const Ask = require('../../models/Ask')
const Room = require('../../models/Room')
const auth = require('../../middleware/authCheck');

// @route  POST /api/ask
// @desc   Create a ask
// @access   Private
router.post('/', auth, async (req, res) => {
    try {
        const user_id = req.user.id
        const {roomId,text,anonymous} = req.body

        if (!roomId || !roomId.match(/^[0-9a-fA-F]{24}$/)) {
          return res.status(404).json({ msg: 'Invalid RoomId' });
        }

        if (!text) {
          return res.status(404).json({ msg: 'Invalid text' });
        }

        const room = await Room.findById(roomId)
  
        if(!room){
            return res.status(404).json({ msg: 'Room not found' });
        }
        if (!room.user.includes(user_id)){
          return res.status(401).json({msg: 'User Unauthorized'})
        }
        if(!room.askStatus){
            return res.status(403).json({ msg: 'Ask Function is Closed' });
        }

        const newAsk = new Ask({
            user: user_id,
            room: roomId,
            text: text,
            anonymous: anonymous
          });
        
        const ask = await newAsk.save()

        //socket emit ask 
        req.app.io.sockets.in(roomId).emit('organizerAsk', { status: 200 })

        res.json(ask);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});


// @route  GET /api/ask/owner/room/:room_id'
// @desc   Get askList by Owner
// @access   Private
router.get("/owner/room/:room_id", auth, async (req, res) => {
  try {
    const user_id = req.user.id
    const {room_id} = req.params;

    if (!room_id || !req.params.room_id.match(/^[0-9a-fA-F]{24}$/)) {
      return res.status(404).json({ msg: 'Invalid RoomId' });
    }

    const room = await Room.findById(room_id);

    if (!room) {
      return res.status(404).json({ msg: 'Room not found' });
    }
    if(room.owner != user_id){
      return res.status(401).json({msg: 'User Unauthorized'})
    }

    const ask = await Ask.find({ room: room_id }).populate("user", ["userName"]);

    // if (ask.length < 1) {
    //   return res.status(404).json({ msg: "Ask not found" });
    // }

    res.json(ask);

  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route  GET /api/ask/user/room/:room_id'
// @desc   Get askList by User
// @access   Private
router.get("/user/room/:room_id", auth, async (req, res) => {
  try {
    const user_id = req.user.id
    const {room_id} = req.params;

    if (!room_id || !req.params.room_id.match(/^[0-9a-fA-F]{24}$/)) {
      return res.status(404).json({ msg: 'Invalid RoomId' });
    }

    const room = await Room.findById(room_id);

    if (!room) {
      return res.status(404).json({ msg: 'Room not found' });
    }
    if (!room.user.includes(user_id)){
      return res.status(401).json({msg: 'User Unauthorized'})
    }

    const ask = await Ask.find({ room: room_id, user: user_id });

    // if (ask.length < 1) {
    //   return res.status(404).json({ msg: "Ask not found" });
    // }

    res.json(ask);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
})

// @route  PUT /api/ask/isanswer/:ask_id
// @desc   Set isAnswer Status 
// @access   Private
router.put('/isanswer/:ask_id', auth, async (req, res) => {
    try {
      const user_id = req.user.id
      const {ask_id} = req.params;

      if (!ask_id || !req.params.ask_id.match(/^[0-9a-fA-F]{24}$/)) {
        return res.status(404).json({ msg: 'Invalid AskId' });
      }
        
      const ask = await Ask.findById(ask_id);
        
      if (!ask) {
        return res.status(404).json({ msg: 'Ask not found' });
      }

      const room = await Room.findById(ask.room);

      if (!room) {
        return res.status(404).json({ msg: 'Room not found' });
      }
      if(room.owner != user_id){
        return res.status(401).json({msg: 'User Unauthorized'})
      }

      ask.isAnswer = true ;

      await ask.save();

      //socket emit ask 
      req.app.io.sockets.in(room._id).emit('organizerPresent', { status: 200 })      

      res.json(ask);

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// @route  PUT /api/ask/present/:ask_id
// @desc   Set Present Status 
// @access   Private
router.put('/present/:ask_id', auth, async (req, res) => {
  try {
    const user_id = req.user.id
    const {ask_id} = req.params;
    
    if (!ask_id || !req.params.ask_id.match(/^[0-9a-fA-F]{24}$/)) {
      return res.status(404).json({ msg: 'Invalid AskId' });
    }

    const ask = await Ask.findById(ask_id);
      
    if (!ask) {
      return res.status(404).json({ msg: 'Ask not found' });
    }

    const room = await Room.findById(ask.room);

    if (!room) {
      return res.status(404).json({ msg: 'Room not found' });
    }
    if(room.owner != user_id){
      return res.status(401).json({msg: 'User Unauthorized'})
    }

    ask.present = !ask.present ;

    await ask.save();

    //socket emit ask 
    req.app.io.sockets.in(room._id).emit('organizerPresent', { status: 200 })   

    res.json(ask);

  } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
  }
});

// @route  PUT /api/ask/present/all/select
// @desc   Set present Status 
// @access   Private
router.put('/present/all/select', auth, async (req, res) => {
  try {
    const user_id = req.user.id
    const {askId} = req.body;
    // console.log(askId)

    const ask = await Ask.find().where('_id').in(askId).exec();
    // console.log(ask)

    ask.map((a)=>{
      a.present = true
      a.save();
    })
    // console.log(ask)

    //socket emit ask 
    req.app.io.sockets.in(ask[0].room).emit('organizerPresent', { status: 200 })   

    res.json(ask);
    
  } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
  }
});

// @route  PUT /api/ask/present/all/clear
// @desc   Set present Status 
// @access   Private
router.put('/present/all/clear', auth, async (req, res) => {
  try {
    const user_id = req.user.id
    const {askId} = req.body;
    // console.log(askId)

    const ask = await Ask.find().where('_id').in(askId).exec();
    // console.log(ask)

    ask.map((a)=>{
      a.present = false
      a.save();
    })
    // console.log(ask)

    req.app.io.sockets.in(ask[0].room).emit('organizerPresent', { status: 200 })
    
    res.json(ask);

  } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
  }
});

// @route  GET /api/ask/present/room/:room_id
// @desc   Get askList by User
// @access   Private
router.get("/present/room/:room_id", auth, async (req, res) => {
  try {
    const user_id = req.user.id
    const {room_id} = req.params;

    if (!room_id || !req.params.room_id.match(/^[0-9a-fA-F]{24}$/)) {
      return res.status(404).json({ msg: 'Invalid RoomId' });
    }

    const room = await Room.findById(room_id);

    if (!room) {
      return res.status(404).json({ msg: 'Room not found' });
    }
    if(room.owner != user_id){
      return res.status(401).json({msg: 'User Unauthorized'})
    }

    const ask = await Ask.find({ room: room_id, present: true });

    // if (ask.length < 1) {
    //   return res.status(404).json({ msg: "Ask not found" });
    // }

    res.json(ask);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
})

module.exports = router;