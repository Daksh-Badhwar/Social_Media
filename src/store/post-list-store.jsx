import React from "react";
import {useReducer} from "react";

export const PostList= React.createContext({
    postList:[],
    addPost:()=>{},
    deletePost:()=>{},
});

const postListReducer =(currPostList,action)=>{
    return currPostList;
}



const PostListProvider=({children})=>{

 const [postList,dispatchPostList]=useReducer(postListReducer, DEFAULT_POST_LIST);

  const addPost=()=>{};

  const deletePost=()=>{};



    return <PostList.Provider value={
        {
         postList,
         addPost,
         deletePost

    }}>{children}</PostList.Provider>

};
const DEFAULT_POST_LIST=[{
    id:"1",
    title:'Going to Mumbai',
    body:'Hi Friends, I am going to Mumbai for my vacations.Hope to enjoy a lot. Peace out',
    reactions:2,
    userId:'user-9',
    tags:['vacation','Mumbai','Enjoying']
},
{
    id:"2",
    title:'Pass ho bhai',
    body:'4 saal ki masti ke baad, finally pass ho gaya',
    reactions:15,
    userId:'user-12',
    tags:['graduating','pass','celebration']
}
]

export default PostListProvider;