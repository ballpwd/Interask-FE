const express = require("express");
const router = express.Router();
const Answer = require("../../models/Answer");
const User = require("../../models/User");
const auth = require("../../middleware/authCheck");
const { model } = require("../../models/User");

// @route  POST /api/answer
// @desc   Create a answer
// @access   Private
router.post("/", auth, async (req, res) => {
  try {
    const user_id = req.user.id;
    const { roomId, questionId, text } = req.body;

    const newAnswer = new Answer({
      user: user_id,
      room: roomId,
      question: questionId,
      text: text,
    });

    const answer = await newAnswer.save();
    console.log("---Request---", req.app);
    req.app.io.sockets.in(roomId).emit("Answer", { status: 200 });

    res.json(answer);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route  GET /api/answer
// @desc   Get all answer
// router.get('/', async (req, res) => {
//     try {
//         const answer = await Answer.find();
//         res.json(answer)
//     } catch (err) {
//         console.error(err.message);
//         res.status(500).send('Server Error');
//     }
// });

// // @route  GET /api/answer/:answer_id
// // @desc   Get answer by answer_id
// router.get("/:answer_id", async (req, res) => {
//   try {
//     const user_id = req.user.id;
//     const { answer_id } = req.params;

//     const answer = await Answer.findById(answer_id);

//     if (!answer) {
//       return res.status(404).json({ msg: "Answer not found" });
//     }

//     res.json(answer);
//   } catch (err) {
//     console.error(err.message);
//     res.status(500).send("Server Error");
//   }
// });

// @route  GET /api/answer/:question_id
// @desc   Get answer by question_id
router.get("/:question_id", async (req, res) => {
  try {
    const { question_id } = req.params;

    const answer = await Answer.find({ question: question_id });

    if (answer.length < 1) {
      return res.status(404).json({ msg: "Answer not found" });
    }

    res.json(answer);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// // @route  GET /api/answer/owner/room/:room_id'
// // @desc   Get answerList by Owner
// // @access   Private
// router.get("/owner/room/:room_id", auth, async (req, res) => {
//   try {
//     const { room_id } = req.params;

//     if (!req.params.room_id.match(/^[0-9a-fA-F]{24}$/)) {
//       return res.status(404).json({ msg: "Room not found" });
//     }

//     const answer = await Answer.find({ room: room_id });

//     if (answer.length < 1) {
//       return res.status(404).json({ msg: "Answer not found" });
//     }

//     res.json(answer);
//   } catch (err) {
//     console.error(err.message);
//     res.status(500).send("Server Error");
//   }
// });

// // @route  GET /api/answer/user/room/:room_id'
// // @desc   Get answerList by User
// // @access   Private
// router.get("/user/room/:room_id", auth, async (req, res) => {
//   try {
//     const { room_id } = req.params;
//     const user_id = req.user.id;
//     console.log("room_id at 93", room_id);
//     console.log("user_id at 93", user_id);
//     if (!req.params.room_id.match(/^[0-9a-fA-F]{24}$/)) {
//       return res.status(404).json({ msg: "Room not found" });
//     }

//     const answer = await Answer.find({ room: room_id, user: user_id });

//     if (answer.length < 1) {
//       return res.status(404).json({ msg: "Answer not found" });
//     }

//     res.json(answer);
//   } catch (err) {
//     console.error(err.message);
//     res.status(500).send("Server Error");
//   }
// });

module.exports = router;