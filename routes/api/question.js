const express = require("express");
const router = express.Router();
const Question = require("../../models/Question");
const Room = require("../../models/Room");
const Answer = require("../../models/Answer");
const auth = require("../../middleware/authCheck");

// @route  POST /api/question
// @desc   Create a question
// @access   Private
router.post("/", auth, async (req, res) => {
  try {
    const user_id = req.user.id
    const { roomId, questionDetail } = req.body;

    if (!roomId || !roomId.match(/^[0-9a-fA-F]{24}$/)) {
      return res.status(404).json({ msg: "Room not found" });
    }
    if (!questionDetail) {
      return res.status(404).json({msg: 'Invalid questionDetail'})
    }

    const room = await Room.findById(roomId);

    if (!room) {
      return res.status(404).json({ msg: 'Room not found' });
    }
    if(room.owner != user_id){
      return res.status(401).json({msg: 'User Unauthorized'})
    }

    const newQuestion = new Question({
      room: roomId,
      questionDetail: questionDetail,
    });

    const question = await newQuestion.save();

    //socket emit question
    req.app.io.sockets.in(roomId).emit("question", { status: 200 });

    res.json(question);

  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// // @route  GET /api/question/owner/id/:question_id
// // @desc   Get question (owner) by question_id 
// @access   Private
router.get("/owner/id/:question_id", auth,async (req, res) => {
  try {
    const user_id = req.user.id
    const {question_id} = req.params;

    if (!question_id || !req.params.question_id.match(/^[0-9a-fA-F]{24}$/)) {
      return res.status(404).json({ msg: 'Invalid QuestionId' });
    }

    const question = await Question.findById(question_id);

    if (!question) {
      return res.status(404).json({ msg: "Question not found" });
    }
    const room = await Room.findById(question.room);

    if (!room) {
      return res.status(404).json({ msg: 'Room not found' });
    }
    if(room.owner != user_id){
      return res.status(401).json({msg: 'User Unauthorized'})
    }

    res.json(question);

  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// // @route  GET /api/question/user/id/:question_id
// // @desc   Get question (user) by question_id 
// @access   Private
router.get("/user/id/:question_id", auth,async (req, res) => {
  try {
    const user_id = req.user.id
    const {question_id} = req.params;

    if (!question_id || !req.params.question_id.match(/^[0-9a-fA-F]{24}$/)) {
      return res.status(404).json({ msg: 'Invalid QuestionId' });
    }

    const question = await Question.findById(question_id);

    if (!question) {
      return res.status(404).json({ msg: "Question not found" });
    }
    const room = await Room.findById(question.room);

    if (!room) {
      return res.status(404).json({ msg: 'Room not found' });
    }
    if (!room.user.includes(user_id)){
      return res.status(401).json({msg: 'User Unauthorized'})
    }

    res.json(question);
    
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route  GET /api/question/owner/room/:room_id
// @desc   Get questionList by Owner
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

    const question = await Question.find({ room: room_id });

    // if (question.length < 1) {
    //   return res.status(404).json({ msg: "Question not found" });
    // }

    res.json(question);
    
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route  GET /api/question/user/room/:room_id'
// @desc   Get questionList by User
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

    const question = await Question.find({ room: room_id });

    // if (question.length < 1) {
    //   return res.status(404).json({ msg: "Question not found" });
    // }

    res.json(question);

  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route    PUT api/question/editquestion/:question_id
// @desc     Edit a question
// @access   Private
router.put("/editquestion/:question_id", auth, async (req, res) => {
  try {
    const user_id = req.user.id
    const {question_id} = req.params
    const {questionDetail} = req.body

    if (!question_id || !req.params.question_id.match(/^[0-9a-fA-F]{24}$/)) {
      return res.status(404).json({ msg: 'Invalid QuestionId' });
    }

    if (!questionDetail) {
      return res.status(404).json({ msg: 'Invalid QuestionDetail' });
    }

    const question = await Question.findById(question_id);

    if (!question) {
      return res.status(404).json({ msg: "Question not found" });
    }
    const room = await Room.findById(question.room);

    if (!room) {
      return res.status(404).json({ msg: 'Room not found' });
    }
    if(room.owner != user_id){
      return res.status(401).json({msg: 'User Unauthorized'})
    }
    if (!question.answered.length < 1) {
      return res.status(403).json({
        msg: "This question have answered. Can't change the question",
      });
    }

    question.questionDetail = questionDetail;

    await question.save();

    //socket emit question
    req.app.io.sockets.in(question.room).emit("question", { status: 200 });

    res.json(question);
    
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route    PUT api/question/editstatus/:question_id
// @desc     Edit question status
// @access   Private
router.put("/editstatus/:question_id", auth, async (req, res) => {
  try {
    const user_id = req.user.id
    const {question_id} = req.params

    if (!question_id || !req.params.question_id.match(/^[0-9a-fA-F]{24}$/)) {
      return res.status(404).json({ msg: 'Invalid QuestionId' });
    }

    const question = await Question.findById(question_id);

    if (!question) {
      return res.status(404).json({ msg: "Question not found" });
    }
    const room = await Room.findById(question.room);

    if (!room) {
      return res.status(404).json({ msg: 'Room not found' });
    }
    if(room.owner != user_id){
      return res.status(401).json({msg: 'User Unauthorized'})
    }

    question.questionStatus = !question.questionStatus;

    await question.save();

    //socket emit question
    req.app.io.sockets.in(question.room).emit("question", { status: 200 });

    res.json(question);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

//@route    DELETE api/question/:question_id
// @desc     Delete a question
// @access   Private
router.delete("/:question_id", auth, async (req, res) => {
  try {
    const user_id = req.user.id
    const {question_id} = req.params

    if (!question_id || !req.params.question_id.match(/^[0-9a-fA-F]{24}$/)) {
      return res.status(404).json({ msg: 'Invalid QuestionId' });
    }

    const question = await Question.findById(question_id);

    if (!question) {
      return res.status(404).json({ msg: "Question not found" });
    }
    const room = await Room.findById(question.room);

    if (!room) {
      return res.status(404).json({ msg: 'Room not found' });
    }
    if(room.owner != user_id){
      return res.status(401).json({msg: 'User Unauthorized'})
    }
    const answer = await Answer.find({ question: question_id })

    await question.remove();

    Answer.deleteMany({ question: question_id }, function (err) {
      if (err) return handleError(err);
    });

    //socket emit question
    req.app.io.sockets.in(question.room).emit("question", { status: 200 });

    res.json({ msg: "Question removed" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
