const express = require("express");
const { check } = require("express-validator");

const postsControllers = require("../controllers/posts-controllers");
const checkAuth = require("../middleware/check-auth");

const router = express.Router();

router.get("/", postsControllers.getAllPosts);

router.get("/:pid", postsControllers.getPostById);

router.get("/user/:uid", postsControllers.getPostsByUserId);

// above is fine for everyone

router.use(checkAuth);

// below is token required

router.post(
  "/",
  [check("title").not().isEmpty(), check("selected").not().isEmpty()],
  postsControllers.createPost
);

router.patch(
  "/:pid",
  [check("description").isLength({ max: 100 }), check("name").not().isEmpty()],
  postsControllers.updatePost
);

router.delete("/:pid", postsControllers.deletePost);

router.post("/like/:pid", postsControllers.likePost);

router.delete("/unLike/:pid", postsControllers.unLikePost);

module.exports = router;
