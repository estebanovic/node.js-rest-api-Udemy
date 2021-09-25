const postsController = require("../controllers/posts.controller");
const express = require("express");
const router = express.Router();

router.post("/add-post", postsController.addPost);

module.exports = router;