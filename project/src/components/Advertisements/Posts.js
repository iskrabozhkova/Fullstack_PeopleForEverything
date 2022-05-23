import React from 'react'
import PropTypes from 'prop-types'
import PostCard from './PostCard'

function Posts({posts}) {
    console.log(posts)
  return (
    <div>
         {Object.keys(posts).map((key, index) => {
             console.log(posts[key]);
             return <PostCard post={posts[key]} key={index}></PostCard>
         })
             // <PostCard post={post} key={post}></PostCard>
         }


  </div>
  )
}

Posts.propTypes = {}

export default Posts

