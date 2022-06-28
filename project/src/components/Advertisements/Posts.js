import {React, useState} from 'react'
import PropTypes from 'prop-types'
import PostCard from './PostCard'
import Categories from '../Categories/Categories';
import { Grid, Button, Container, Stack, Typography } from '@mui/material';

function Posts({posts}) {
  const [filter, setFilter] = useState("");

  function changeFilter(filter){
    setFilter(filter);
  }
  return (
    
    <div>
      <h1>Advertisements</h1>
      <Categories onFilterCategories={changeFilter}></Categories>
      <Grid container spacing={12} >
      <Grid item xs={10} ml={55} mt={30}>
      <Grid container spacing={12} columnGap={10} rowGap={5}>
         {Object.keys(posts)
          .filter((key, index) => filter === posts[key].category)
          .map((key, index) => {
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

