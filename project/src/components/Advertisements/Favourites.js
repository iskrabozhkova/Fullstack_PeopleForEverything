import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import axios from 'axios';
import PostCard from './PostCard';
import FavCard from './FavouriteCard';
import ButtonAppBarUser from '../Menu/AppBarUser';

function Favourites() {
    const [favs, setFavs] = useState([]);
    const userDetails = JSON.parse(localStorage.getItem('userData'));
    const id = userDetails._id;

    useEffect(() => {
        axios({
             method: "GET",
             withCredentials: true,
             url: `http://localhost:8080/api/favs/:${id}`
        }).then(res => {
            const data = res.data.favourites;
            data.map(newFav => {
              setFavs(favs => [...favs, newFav]);
            })
        });
       },[])
  return (
    
    <div>
    <h1>Favourite advertisements</h1>
    <ButtonAppBarUser/>
        <ul>
           {
           favs.map((fav, idx) => 
            <FavCard key={idx} post={fav}></FavCard>   
           )
           }
        </ul>
    </div>
  )
}

Favourites.propTypes = {}

export default Favourites
