
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./components/Header";
import Footer from "./components/Footer";

import CreatePost from "./components/CreatePost";
import Sidebar from "./components/Sidebar";
import PostList from "./components/PostList";
import {useState} from "react"

function App() {
  const[selectedTab,setSelectedTab]=useState("Home");
  return (
    <div className="app-container">
    <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab}/>

    <div className="content">
      <Header/>

      {selectedTab==="Home"?(
        <PostList/>):(
        <CreatePost/>)
      }
      
      
      <Footer/>
    </div>
    </div>  
  
  )
}

export default App
