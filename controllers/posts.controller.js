const postsService = require("../services/posts.service");

exports.addPost = (req, res, next) => {
    const data = {
        description: req.body.description,
        imagePath: req.body.imagePath,
        addByUserId: req.body.addByUserId
    }
}