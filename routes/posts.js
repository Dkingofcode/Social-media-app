const express = require("express");
const router = express.Router();
const upload = require("../middleware/multer");
const postsController = require("../controllers/posts");
const { ensureAuth, ensureGuest } = require("../middleware/auth");


//Post Routes - simplified for now
router.get("/:id", ensureAuth, postsCOntroller.getPost);

router.post("/createPost", upload.single("file"), postCOntroller.createPost);

router.put("/likePost/:id", postsCOntroller.likePost);

router.delete("/deletePost/:id", postsController.deletePost);