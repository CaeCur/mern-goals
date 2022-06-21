const asyncHandler = require("express-async-handler");

const Goal = require("../models/goalModel");
const User = require("../models/userModel");

// @desc    Get goals
// @route   GET /api/goals
// @access  Private
const getGoals = asyncHandler(async (req, res) => {
  const goals = await Goal.find({ user: req.user.id });

  res.status(200).json(goals);
});

// @desc    Set goal
// @route   POST /api/goals
// @access  Private
const setGoal = asyncHandler(async (req, res) => {
  if (!req.body.description) {
    res.status(400);
    throw new Error("No description provided");
  }

  const goal = await Goal.create({
    description: req.body.description,
    user: req.user.id,
  });

  res.status(200).json(goal);
});

// @desc    Update goal
// @route   UPDATE /api/goals/:id
// @access  Private
const updateGoal = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id);

  if (!goal) {
    res.status(400);
    throw new Error("Goal not found");
  }

  // check for user
  // const user = await User.findById(req.user.id); // no need to re-check user since it is already in token

  if (!req.user) {
    res.status(401);
    throw new Error("User not found");
  }

  // check if user is owner of goal
  if (goal.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error("Not authorized");
  }

  const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, { new: true });

  res.status(200).json(updatedGoal);
});

// @desc    Delete goals
// @route   DELETE /api/goals/:id
// @access  Private
const deleteGoal = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id);

  if (!goal) {
    res.status(400);
    throw new Error("Goal not found");
  }

  // check for user
  // const user = await User.findById(req.user.id); // no need to re-check user since it is already in token

  if (!req.user) {
    res.status(401);
    throw new Error("User not found");
  }

  // check if user is owner of goal
  if (goal.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error("Not authorized");
  }

  const deletedGoal = await Goal.findByIdAndDelete(req.params.id);

  res.status(200).json(deletedGoal);
});

module.exports = {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
};
