import {React, useState} from 'react'
import PropTypes from 'prop-types'
import PostCard from './PostCard'
import Categories from '../Categories/Categories';

function Posts({posts}) {
  const [filter, setFilter] = useState("");

  function changeFilter(filter){
    setFilter(filter);
  }

  return (
    <div>
      <Categories onFilterCategories={changeFilter}></Categories>
         {Object.keys(posts)
          .filter((key, index) => filter === posts[key].category)
          .map((key, index) => {
            // console.log(posts[key]);
             return <PostCard post={posts[key]} key={index}></PostCard>
         })
             // <PostCard post={post} key={post}></PostCard>
         }


  </div>
  )
}

Posts.propTypes = {}

export default Posts

