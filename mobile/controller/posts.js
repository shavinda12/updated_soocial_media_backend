const { getPost, insertNewPost, getCommentsByPostId, addNewComment } = require("../services/posts")



module.exports={
    getPosts:(req,res)=>{
        getPost((error,result)=>{
            if(error){
                return res.json({
                    success:0,
                    message:error.message
                })
            }
            else if(result.length==0){
                return res.json({
                    success:101,
                    message:'no post found'
                })
            }
            else if(result){
                return res.json({
                    success:200,
                    message:result
                })
            }
        })
    },
    insertNewPost:(req,res)=>{
        const{title,description}=req.body
        console.log(title,description)
        insertNewPost(title,description,(error,result)=>{
            if(error){
                return res.status(500).json({
                    success:0,
                    message:error.message
                })
            }
            else if(result.affectedRows>0){
                return res.json({
                    success:200,
                    message:result
                })
            }
            else{
                return res.json({
                    success:101,
                    message:"error"
                })
            }
        })
        

    },
    getCommentsByPostId:(req,res)=>{
        const {postId}=req.params;
        const intPostId=Number(postId.slice(1))
        getCommentsByPostId(intPostId,(error,result)=>{
            if(error){
                return res.json({
                    success:0,
                    message:error
                })
            }if(result){
                return res.json({
                    success:200,
                    message:result
                })
            }
        })
    },
    addNewComment:(req,res)=>{
        const{newComment,postId}=req.body
        addNewComment(newComment,postId,(error,result)=>{
            if(error){
                return res.json({
                    success:0,
                    message:error
                })
            }
            if(result.affectedRows>0){
                return res.json({
                    success:200,
                    message:result
                })
            }
        })
    }
}