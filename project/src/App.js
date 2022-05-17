import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import HomePage from './components/HomePage/HomePage';
import Registration from './components/Registration/Registration';
import Login from './components/Login/Login'
import {register, login} from "./components/Service/API";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import AddAdvertisement from './components/Advertisements/AddAdvertisement';


function App() {
  const [users, setUsers] = useState([]);

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
    console.log(res)})
// const response = await fetch('http://localhost:8080/api/auth/login', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify(user)
// })
// const data = await response.json();
// console.log(data);
}
  return (
    <div className="App">
    <Router>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/registration' element={<Registration onRegister={registerUser}/>}/>
      <Route path='/login' element={<Login onLogin={loginUser}/>}/>
      <Route path='/addvertisement/new' element={<AddAdvertisement/>}/>
    </Routes>
    </Router>
    </div>
  );
}

export default App;
