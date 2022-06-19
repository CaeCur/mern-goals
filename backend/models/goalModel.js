const mongoose = require("mongoose");

const goalSchema = new mongoose.Schema(
  {
    description: {
      type: String,
      required: [true, "Please add a goal as text"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Goal", goalSchema);
