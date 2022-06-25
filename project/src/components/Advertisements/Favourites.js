import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import axios from 'axios';

function Favourites() {
    const [favs, setFavs] = useState([]);
    useEffect(() => {
        axios({
             method: "GET",
             withCredentials: true,
             url: "http://localhost:8080/api/favs"
        }).then(res => {
            for(let prop in res.data){
                    setFavs(favs => [...favs, res.data[prop]])
                //console.log(res.data[prop])
            }
            // console.log(res.data)
            //  Array.from(res.data).map(fav => {
            //         //setFavs(favs => [...favs, fav]);
            //         console.log(fav)
            //  });
            // console.log(favs)
        });
       },[])
  return (
    
    <div>
        <ul>
           {
           favs.filter((el, i, inputArr) => {
            return inputArr.indexOf(el) === i;
           }).map((fav) => 
           //console.log(fav)
            <li key={fav._id}>{fav.firstName}</li>
           )
           }
        </ul>
    </div>
  )
}

Favourites.propTypes = {}

export default Favourites
