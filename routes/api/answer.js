const express = require("express");
const router = express.Router();
const Answer = require("../../models/Answer");
const User = require("../../models/User");
const auth = require("../../middleware/authCheck");
const { model } = require("../../models/User");

module.exports = router;
