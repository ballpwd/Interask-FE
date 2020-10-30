const express = require("express");
const router = express.Router();
const Answer = require("../../models/Answer");
const Room = require("../../models/Room");
const Question = require("../../models/Question");
const auth = require("../../middleware/authCheck");
const { model } = require("../../models/User");

// @route  POST /api/answer
// @desc   Create a answer
// @access   Private
router.post("/", auth, async (req, res) => {
  try {
    const user_id = req.user.id;
    const { roomId, questionId, text } = req.body;

    if (!roomId || !roomId.match(/^[0-9a-fA-F]{24}$/)) {
      return res.status(404).json({ msg: 'Invalid RoomId' });
    }

    const room = await Room.findById(roomId)

    if(!room){
        return res.status(404).json({ msg: 'Room not found' });
    }
    if (!room.user.includes(user_id)){
      return res.status(401).json({msg: 'User Unauthorized'})
    }
    if(!text){
      return res.status(404).json({ msg: "Answer your question!" });
    }
   
    const question = await Question.findById(questionId)

    if(!question){
      return res.status(404).json({ msg: 'Question not found' });
    }
    if(!question.questionStatus){
      return res.status(403).json({ msg: 'This Question is Closed' });
  }
    if(question.answered.includes(user_id)){
      return res.status(403).json({ msg: 'Already answer' });
    }

    const newAnswer = new Answer({
      user: user_id,
      room: roomId,
      question: questionId,
      text: text,
    });

    const answer = await newAnswer.save();

    question.answered.push(user_id)

    await question.save();

    //socket emit answer
    req.app.io.sockets.in(roomId).emit("organizerAnswer", { status: 200 });
    res.json(answer);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route  GET /api/answer/user/:question_id
// @desc   Get answerlist (user)
router.get("/user/:question_id", auth, async (req, res) => {
  try {
    const user_id = req.user.id;
    const { question_id } = req.params;

    const question = await Question.findById(question_id)

    if(!question){
      return res.status(404).json({ msg: 'Question not found' });
    }

    const room = await Room.findById(question.room);

    if (!room) {
      return res.status(404).json({ msg: 'Room not found' });
    }
    if (!room.user.includes(user_id)){
      return res.status(401).json({msg: 'User Unauthorized'})
    }

    const answer = await Answer.findOne({user: user_id,question: question_id});

    // if (!answer) {
    //   return res.status(404).json({ msg: "Answer not found" });
    // }

    res.json(answer);

  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route  GET /api/answer/owner/:question_id
// @desc   Get answerlist (owner) 
router.get("/owner/:question_id", auth, async (req, res) => {
  try {
    const user_id = req.user.id;
    const { question_id } = req.params;

    const question = await Question.findById(question_id)

    if(!question){
      return res.status(404).json({ msg: 'Question not found' });
    }

    const room = await Room.findById(question.room);

    if (!room) {
      return res.status(404).json({ msg: 'Room not found' });
    }
    if(room.owner != user_id){
      return res.status(401).json({msg: 'User Unauthorized'})
    }

    const answer = await Answer.find({ question: question_id }).populate("user", ["userName"]).populate("question", ["questionDetail"]);

    // if (answer.length < 1) {
    //   return res.status(404).json({ msg: "Answer not found" });
    // }

    res.json(answer);

  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
