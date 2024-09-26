const postRouters = require("express").Router();
const {
  getPosts,insertNewPost,
  getCommentsByPostId,
  addNewComment
} = require("../controller/posts");


postRouters.get("/",getPosts);
postRouters.post("/newPost",insertNewPost)
postRouters.get("/:postId",getCommentsByPostId)
postRouters.post("/addComment",addNewComment)


module.exports = postRouters;