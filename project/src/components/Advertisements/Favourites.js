import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import axios from 'axios';
import PostCard from './PostCard';
import FavCard from './FavouriteCard';
import ButtonAppBarUser from '../Menu/AppBarUser';

function Favourites() {
    const [favs, setFavs] = useState([]);
    useEffect(() => {
        axios({
             method: "GET",
             withCredentials: true,
             url: "http://localhost:8080/api/favs"
        }).then(res => {
            console.log(res)
            for(let prop in res.data){
                    setFavs(favs => [...favs, res.data[prop]])
            }
        });
       },[])
  return (
    
    <div>
    <h1>Favourite freelansers</h1>
    <ButtonAppBarUser/>
        <ul>
           {
           favs.filter((el, i, inputArr) => {
            return inputArr.indexOf(el) === i;
           }).map((fav, idx) => 
            <FavCard key={idx} post={fav}></FavCard>   
           )
           }
        </ul>
    </div>
  )
}

Favourites.propTypes = {}

export default Favourites
