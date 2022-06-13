import PostMessage from "../models/postMessage.js";

export const getPosts = async(req, res) => {
  try {
      const postMessages = await PostMessage.find();
      console.log(postMessages)
      res.status(200).json(postMessages);
  } catch (error) {
      res.status(404).json({message:error.message});
  }
};

export const createPost =async (req, res) => {
    
    const post={
        title:req.body.title,
        message:req.body.message,
        date:req.body.date,
        creator:req.body.creator,
    }
   
    const newPost = new PostMessage(post)
    try {
        await newPost.save();
        res.status(200).json(newPost);
        console.log(post);
    } catch (error) {
        res.status(409).json({message:error.message});
    }
  };
  
  export const deletePost=async(req,res)=>{
    const id=req.body.id;
    try {
        await PostMessage.deleteOne({_id:id})
        res.status(200).json({message:"elemento eliminado: "+id})
    } catch (error) {
        res.status(409).json({message:error.message});
    }
  };

  export const updatePost=async(req,res)=>{
    
    const query={_id:req.body.id}
    const post={
        title:req.body.title,
        message:req.body.message,
        date:req.body.date,
        creator:req.body.creator,
    }

    try {
        await PostMessage.findOneAndUpdate(query,post)
        res.status(200).json(post)
    } catch (error) {
        res.status(409).json({message:error.message});
    }
  };