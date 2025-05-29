const Post=({post})=>{
 return(
    <div class="card post-card" style={{width: "18rem"}}>
  
  <div class="card-body">
    <h5 class="card-title">{post.title}
   
  <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    {post.reactions}
  </span>
  </h5>
    <p class="card-text">{post.body}</p>

    {post.tags.map((tag)=>
    <span class="badge text-bg-primary hash-tag">{tag}</span>
    )}
    
    
  </div>
</div>
 )
}
export default Post;