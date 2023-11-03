import Post from "../models/post.js";

export const list = async (req, res) => {

  const data = await Post.find();

  res.status(200).send(data);
};

export const create = async (req, res) => {

  const data = await Post.create(req.body);

  res.status(201).send(data);
};
