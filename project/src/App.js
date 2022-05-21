import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import HomePage from './components/HomePage/HomePage';
import Registration from './components/Registration/Registration';
import Login from './components/Login/Login'
import {register, login, createAd} from "./components/Service/API";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import AddAdvertisement from './components/Advertisements/AddAdvertisement';
import Categories from './components/Categories/Categories';
import Advertisements from './components/Advertisements/Adverisements'


function App() {
  const [users, setUsers] = useState([]);
  const [advertisement, setAdvertisement] = useState([]);

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
}
const addAdvertisement = (ad) => {
  createAd(ad).then(newAdd => {
    setAdvertisement(old => [...old, newAdd]);
  })
}
  return (
    <div className="App">
    <Router>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/registration' element={<Registration onRegister={registerUser}/>}/>
      <Route path='/login' element={<Login onLogin={loginUser}/>}/>
      <Route path='/categories' element={<Categories/>}/>
      <Route path='/addvertisement/new' element={<AddAdvertisement addAdvertisement={addAdvertisement}/>}/>

    </Routes>
    </Router>
    </div>
  );
}

export default App;
