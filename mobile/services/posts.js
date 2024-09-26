const pool=require("../../config/dbConfig")

module.exports=({
    getPost:(callback)=>{
        pool.query(`SELECT p.postId,p.title,p.description,COUNT(c.commentId) AS num_of_comments FROM post p
            LEFT JOIN 
            comment c ON p.postId = c.postId
            GROUP BY 
            p.postId, p.title, p.description
            ORDER BY 
            p.postId`,[],(error,result,feilds)=>{
                if(error){
                    return callback(error)
                }
                return callback(null,result);
            })
    },

    insertNewPost:(title,description,callback)=>{
        pool.query('INSERT INTO post(title,description) VALUES(?,?)',[title,description],(error,result,feild)=>{
            if(error){
                return callback(error)
            }
            return callback(null,result);
        })
    },
    getCommentsByPostId:(postId,callback)=>{
        pool.query(`SELECT comment,commentId FROM comment WHERE postId=?`,[postId],(error,result,feilds)=>{
            if(error){
               return callback(error)
            }
            return callback(null,result)
        })
    },
    addNewComment:(newComment,postId,callback)=>{
        pool.query(`INSERT INTO comment(postId,comment) VALUES(?,?)`,[postId,newComment],(error,result,feild)=>{
            if(error){
                console.log(error.message)
                return callback(error)
            }
            console.log(result)
            return callback(null,result)
        })
    }
})