import React from 'react'
import PropTypes from 'prop-types'
import CategoryCard from './CategoryCard'

function Categories() {
   // const categories = ["Home", "Car"];
    const categories = [{
      id: 1,
      name: "Home"
    },
  {
    id: 2, 
    name: "Car"
  }]
  return (
    <div>
    {
        categories.map(category => {
            return <CategoryCard key={category.id} category={category.name}></CategoryCard>
    })}
    </div>
  )
}



export default Categories
