import React, {useState} from 'react'
import { Select, MenuItem} from '@mui/material';

function Categories({onFilterCategories, value, setValue}) {

  function handleChange(e){
    onFilterCategories(e.target.value);
     setValue(e.target.value);
  }
  return (
    <div>
  
    <Select
      labelId="demo-simple-select-label"
      id="demo-simple-select"
      value={value}
      label="Choose category"
      onChange={handleChange}
      sx={{padding: '5px', width: '300px', margin: '30px'}}
    >
      <MenuItem selected={true} value="home">Home</MenuItem>
      <MenuItem value="car">Car</MenuItem>
      <MenuItem value="homeworks">Homeworks</MenuItem>
    </Select>
    </div>
  )
}

Categories.propTypes = {}

export default Categories
