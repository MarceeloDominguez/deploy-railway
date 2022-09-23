import mongoose from "mongoose";

const postScheme = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
});

export default mongoose.model("Post", postScheme);
