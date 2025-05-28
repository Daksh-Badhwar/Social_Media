import React from "react";
import {useReducer} from "react";

const PostList= React.createContext({
    postList:[],
    addPost:()=>{},
    deletePost:()=>{},
});

const postListReducer =(currPostList,action)=>{
    return currPostList;
}



const PostListProvider=({children})=>{

 const [postList,dispatchPostList]=useReducer(postListReducer, []);

  const addPost=()=>{};

  const deletePost=()=>{};



    return <PostList.Provider value={
        {
         postList,
         addPost,
         deletePost

    }}>{children}</PostList.Provider>

}

export default PostListProvider;