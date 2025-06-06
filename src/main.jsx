import React from 'react';
import ReactDom from 'react-dom/client';

import App from './routes/App.jsx';
import {RouterProvider, createBrowserRouter} from 'react-router-dom';
import CreatePost from "./components/CreatePost";
import PostList,{postLoader} from "./components/PostList"
import {createPostAction} from "./components/CreatePost"

const  router = createBrowserRouter([
  {path:"/" ,element: <App/>,
  children: [
    {path:"/",element:<PostList/>,loader:postLoader},
    {path:"/create-post",element:<CreatePost/>,action:createPostAction},
  ]

  },


]);


ReactDom.createRoot(document.getElementById('root')).render(
  <>
  <RouterProvider router={router}/>
    
  </>
)
