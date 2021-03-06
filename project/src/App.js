import "./App.css";
import { useState, useEffect } from "react";
import HomePage from "./components/HomePage/HomePage";
import Registration from "./components/Registration/Registration";
import Login from "./components/Login/Login";
import { createPost, findAllPosts } from "./components/Service/API";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Categories from "./components/Categories/Categories";
import axios from "axios";
import AddPost from "./components/Advertisements/AddPost";
import DetailedAd from "./components/Advertisements/DetailedAd";
import Profile from "./components/Profile/Profile";
import Posts from "./components/Advertisements/Posts";
import Favourites from "./components/Advertisements/Favourites";
import Appointments from "./components/Appointments/Appointments";
import UserProfile from "./components/Profile/UserProfile";
import About from "./components/About/About";

function App() {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  const [userData, setUserData] = useState("");

  function registerUser(user) {
    return axios({
      method: "POST",
      data: user,
      withCredentials: true,
      url: "http://localhost:8080/api/auth/register",
    }).then((res) => {
      if (res.data.status === "error") {
        alert(`${res.data.error}`);
      } 
      else {
      const created = res.config.data;
      setUsers((oldUsers) => [...oldUsers, created]);
      if (res.status === 201) {
        window.location.replace("http://localhost:3000/login");
      }
    }
    });
  }
  async function loginUser(user) {
    return axios({
      method: "POST",
      data: user,
      withCredentials: true,
      url: "http://localhost:8080/api/auth/login",
    }).then((res) => {
      if (res.data.status === "error") {
        alert(`${res.data.error}`);
      } else {
        const token = res.data.token;
        localStorage.setItem("auth-token", token);
        setUserData(res.data.email);
        localStorage.setItem("userData", JSON.stringify(res.data.userData));
        const userDetails = JSON.parse(localStorage.getItem("userData"));
        if (userDetails.role == "user") {
          window.location.replace(`http://localhost:3000/userProfile`);
        } else {
          window.location.replace(`http://localhost:3000/profile`);
        }
      }
    });
  }

  function addPost(post) {
    createPost(post).then((created) => {
      setPosts((posts) => [...posts, created]);
      window.location.replace("http://localhost:3000/addvertisements");
    });
  }
  useEffect(() => {
    findAllPosts().then((posts) => setPosts(posts));
  }, []);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/registration"
            element={<Registration onRegister={registerUser} />}
          />
          <Route path="/login" element={<Login onLogin={loginUser} />} />
          <Route path="/categories" element={<Categories />} />
          <Route
            path="/addvertisement/new"
            element={<AddPost onAddPost={addPost} />}
          />
          <Route path="/addvertisements" element={<Posts posts={posts} />} />
          <Route path="/addvertisements/:id" element={<DetailedAd />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/userProfile" element={<UserProfile />} />
          <Route path="/favs/:id" element={<Favourites />} />
          <Route path="/appointments/:id" element={<Appointments />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
