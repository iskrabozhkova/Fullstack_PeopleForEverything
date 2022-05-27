import React from 'react'
import PropTypes from 'prop-types'
import Button from '@mui/material/Button';
import { Select, MenuItem} from '@mui/material';

function Categories({onFilterCategories}) {
  function handleChange(e){
    onFilterCategories(e.target.value);
  }
  return (
    <div>
    <Select
      labelId="demo-simple-select-label"
      id="demo-simple-select"
      value="car"
      label="Choose category"
      onChange={handleChange}
    >
      <MenuItem value="home">Home</MenuItem>
      <MenuItem value="car">Car</MenuItem>
    </Select>
    </div>
  )
}

Categories.propTypes = {}

export default Categories
