
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "../components/Header";
import Footer from "../components/Footer";

import CreatePost from "../components/CreatePost";
import Sidebar from "../components/Sidebar";
import PostList from "../components/PostList";
import {useState} from "react"
import {Outlet} from "react-router-dom";
import PostListProvider from "../store/post-list-store";

function App() {
  const[selectedTab,setSelectedTab]=useState("Home");
  return (
    <PostListProvider>
    <div className="app-container">
    <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab}/>

    <div className="content">
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
    </div>
    </PostListProvider>  
  
  )
}

export default App
