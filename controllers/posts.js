const cloudinary = require("../middleware/cloudinary");
const Post = require("../models/Post");
const Comment = require("../models/Comment");

module.exports = {
    getProfile: async (req, res) => {
        try{
           const post  = await Post.find({ user: req.user.id });
           res.render("profile.ejs", { posts: posts, user: req.user }); 
        }catch(err){
           console.log(err);
        }
    },
    getFeed: async (req, res) => {
       try{
         const posts = await Post.find().sort({ createdAt: 'desc' }).lean();
         res.render("feed.ejs", { posts: posts });   
       } catch(err){
        console.log(err);
       }
    },

    getPost: async(req, res) => {
        try{
          const post = await Post.findById(req.params.id);
          const comments = await Comment.find({ post: req.params.id}).sort({
            createdAt: "desc" }).lean();
            res.render("post.ejs", {post: post, user: req.user, comments: comments }); 
        }catch(err){
          console.log(err);
        }
    },

    createPost: async (req, res) => {
        try{
          
        }catch(err){

        }
    }
}