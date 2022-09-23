import Post from "../models/Post.js";

export const getPosts = async (req, res) => {
  try {
    const posts = await Post.find();
    res.send(posts);
  } catch (error) {
    console.log(error);
  }
};

export const createPost = async (req, res) => {
  const { title } = req.body;

  const newPost = new Post({ title });

  await newPost.save();
  return res.json(newPost);
};
