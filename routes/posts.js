import express from "express";

import { getPosts,createPost,deletePost,updatePost} from "../controllers/posts.js";

const router = express.Router();

router.get('/',getPosts)
router.post('/createPost',createPost)
router.delete('/deletePost',deletePost)
router.put('/updatePost',updatePost)

export default router;