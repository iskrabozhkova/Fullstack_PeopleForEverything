import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import HomePage from './components/HomePage/HomePage';
import Registration from './components/Registration/Registration';
import Login from './components/Login/Login'
import {register, login, createPost, findAllPosts} from "./components/Service/API";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Categories from './components/Categories/Categories';
import axios from 'axios';
import AddPost from './components/Advertisements/AddPost';
import Posts from './components/Advertisements/Posts';


function App() {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);

  function registerUser(user){
    register(user)
    .then(res =>{
     const created = res.config.data;
     setUsers(oldUsers => [...oldUsers,created])
    })
}
async function loginUser(user){
  login(user)
  .then(res =>{
    const token = res.data;
    localStorage.setItem('auth-token', token);
    })
}

function addPost(post){
    createPost(post).then(created => {
      setPosts(oldPosts => [...oldPosts, created]);
    })
}
useEffect(() => {
  findAllPosts()
      .then(posts => setPosts(posts));
  // return () => { console.log("Cleaning up ...")};
}, []);

  return (
    <div className="App">
    <Router>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/registration' element={<Registration onRegister={registerUser}/>}/>
      <Route path='/login' element={<Login onLogin={loginUser}/>}/>
      <Route path='/categories' element={<Categories/>}/>
      <Route path='/addvertisement/new' element={<AddPost onAddPost={addPost}/>}/>
      <Route path='/addvertisements' element={<Posts posts={posts}/>}/>
    </Routes>
    </Router>
    </div>
  );
}

export default App;
