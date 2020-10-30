const express = require("express");
const router = express.Router();
const Feedback = require("../../models/Feedback");
const Room = require("../../models/Room");
const auth = require("../../middleware/authCheck");

// @route  POST /api/feedback
// @desc   Create a feedback
// @access   Private
router.post("/", auth, async (req, res) => {
  try {
    const user_id = req.user.id;
    const { roomId, text, emoticon } = req.body;

    if (!roomId || !roomId.match(/^[0-9a-fA-F]{24}$/)) {
      return res.status(404).json({ msg: "Room not found" });
    }
    if (!emoticon) {
      return res.status(404).json({ msg: "Give your rating" });
    }
    
    const room = await Room.findById(roomId);

    if (!room) {
      return res.status(404).json({ msg: "Room not found" });
    }
    if (!room.user.includes(user_id)){
      return res.status(401).json({msg: 'User Unauthorized'})
    }
    if (!room.feedbackStatus) {
      return res.status(403).json({ msg: "Feedback Function is Closed" });
    }

    const newFeedback = new Feedback({
      user: user_id,
      room: roomId,
      text: text,
      emoticon: emoticon,
    });

    const feedback = await newFeedback.save();

    //socket emit feedback
    req.app.io.sockets.in(roomId).emit("organizerFeedback", { status: 200 });

    res.json(feedback);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// // @route  GET /api/feedback/owner/room/:room_id'
// // @desc   Get feedbackList by Owner
// // @access   Private
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

    const feedback = await Feedback.find({ room: room_id }).populate("user", ["userName",]);

    // if (feedback.length < 1) {
    //   return res.status(404).json({ msg: "Feedback not found" });
    // }

    res.json(feedback);

  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// // @route  GET /api/feedback/user/room/:room_id'
// // @desc   Get feedbackList by User
// // @access   Private
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

    const feedback = await Feedback.find({ room: room_id, user: user_id });

    // if (feedback.length < 1) {
    //   return res.status(404).json({ msg: "Feedback not found" });
    // }

    res.json(feedback);
    
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
