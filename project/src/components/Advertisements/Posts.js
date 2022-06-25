import {React, useState} from 'react'
import PropTypes from 'prop-types'
import PostCard from './PostCard'
import Categories from '../Categories/Categories';
import { Grid, Button, Container, Stack, Typography } from '@mui/material';

function Posts({posts}) {
  // console.log(favs)
  const [filter, setFilter] = useState("");
  // let postsToShow;
  // let inFavs;
  // if(showFavs) {
  //   postsToShow = favs;
  //   inFavs = (post) => true;
  // } else {
  //   postsToShow = posts;
  //   inFavs = (post) => favs.some(fav => fav.id === post.id);
  // }

  function changeFilter(filter){
    setFilter(filter);
  }

  return (
    
    <div>
      <Categories onFilterCategories={changeFilter}></Categories>
      <Grid container spacing={12} >
      <Grid item xs={12} m={25}>
      
      <Grid container spacing={12} columnGap={10} rowGap={5}>
         {Object.keys(posts)
          .filter((key, index) => filter === posts[key].category)
          .map((key, index) => {
            // console.log(posts[key]);
             return <PostCard post={posts[key]} key={index}></PostCard>
         })
         }
         </Grid>
         </Grid>
         </Grid>

  </div>
  )
}

Posts.propTypes = {}

export default Posts

