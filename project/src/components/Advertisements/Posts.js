import {React, useState} from 'react'
import PostCard from './PostCard'
import Categories from '../Categories/Categories';
import { Grid, Container} from '@mui/material';
import ButtonAppBarUser from '../Menu/AppBarUser';
import ButtonAppBar from '../Menu/AppBar';
import './Posts.css'

function Posts({posts}) {
  const [filter, setFilter] = useState("home");
  const [value, setValue] = useState("home");
  const userDetails = JSON.parse(localStorage.getItem('userData'));
  const role = userDetails.role;

  function changeFilter(filter){
    setFilter(filter);
  }
  
  return (
    <div>
    {role === 'user' ? <ButtonAppBarUser/> : <ButtonAppBar/>}
    <Container sx={{marginLeft: '15%'}}>
      <h1>Advertisements</h1>
      <Container className='posts-container'>
        <Categories 
        onFilterCategories={changeFilter} 
        value={value} 
        setValue={setValue}/>
        <Grid container spacing={12} >
          <Grid item xs={10}  ml={20} mt={20} mb={20}>
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
      </Container>
    </Container>
  </div>
  )
}
export default Posts

