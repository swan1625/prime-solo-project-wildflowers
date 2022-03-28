import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import FlowerListItem from '../FlowerListItem/FlowerListItem';
import './FlowerList.css'


// ---------MATERIAL UI STUFF-----
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


function flowerList() {

  const dispatch = useDispatch();
  const flowers = useSelector(store => store.flowerList);


  const [color, setColor] = useState('');
  const [type, setType] = useState('');
  const [filteredList, SetFilteredList] = useState(flowers);


  const filterByColor = (filteredData) => {
    console.log('this is filter list', filteredList);
    if (!color && !type) {
      return filteredData;
    } else if (color != '' && !type) {
      const filteredColor = filteredData.filter(
        (flower) => flower.color == color && type === "");
      return filteredColor;
    } else if (type != '' && !color) {
      const filteredColor = filteredData.filter(
        (flower) => flower.type == type && color === "");
      return filteredColor;
    } else if (type != '' && color != '') {
      const filteredColor = filteredData.filter(
        (flower) => flower.type == type && flower.color === color);
      return filteredColor;
    }

  }
  



 

  const handleTypeChange = (event) => {
    // setColor('');
    setType(event.target.value);
  };


  const handleChange = (event) => {
    // setType('');
    setColor(event.target.value);
    // filterByColor();
    console.log('test sdffdfglowers', filteredList);
  };

  useEffect(() => { 
    // on page load, fetch these things
    dispatch({ type: 'FETCH_FLOWERS' });
    let filteredData = filterByColor(flowers);
    SetFilteredList(filteredData);
    window.scrollTo(0, 0);
    console.log('refresh');
  }, [color, type]);

  console.log('flowers is', flowers);
  console.log('color is', color);
  console.log('type is', type);
  return (
    <div>

      <h1> Complete Flower Index </h1>

      <Box sx={{ minWidth: 120, mt: 1.5, mb: 2.5, ml:1.2,}}>
        <FormControl style={{ minWidth: 350, }}>
          <InputLabel id="demo-simple-select-label" variant="filled">Filter By Color</InputLabel>
          <Select
            sx={{ backgroundColor: 'white', mb: 2, mt:1}}
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={color}
            label="Flowers By Color"
            placeholder="Filter By Color"
            onChange={handleChange}
          >
            <MenuItem  value={''}>All Colors</MenuItem>
            <MenuItem  value={'Yellow'}>Yellow Flowers 💛</MenuItem>
            <MenuItem value={'Purple'}>Pink/Purple Flowers 💜💓</MenuItem>
            <MenuItem value={'Orange'}>Orange Flowers 🧡</MenuItem>
            <MenuItem value={'White'}>White Flowers 🤍</MenuItem>
            <MenuItem value={'Red'}>Red Flowers ❤️</MenuItem>
            <MenuItem value={'Blue'}>Blue Flowers 💙 </MenuItem>
          </Select>

        </FormControl>
        <FormControl style={{ minWidth: 350, justifyContent: 'center'}}>
          <InputLabel id="demo-simple" variant="filled">Filter By Type</InputLabel>
          <Select
            sx={{ backgroundColor: 'white', mb: 2, mt:1}}
            labelId="demo"
            id="demo-simple"
            label="Flowers By Type"
            value={type}
            onChange={handleTypeChange}
          >
            <MenuItem value={''}>All Types </MenuItem>
            <MenuItem value={'Common'}> Common Flowers (Common) </MenuItem>
            <MenuItem value={'Special Concern'}> Special Concern Flowers (Uncommon) </MenuItem>
            <MenuItem value={'Threatened'}> Threatened Flowers (Rare) </MenuItem>
            <MenuItem value={'Endangered'}> Endangered Flowers (Epic)</MenuItem>
            <MenuItem value={'Como'}> Como Flowers (Bonus) </MenuItem>
          </Select>

        </FormControl>
      </Box>



      <div >
        <div className='whatever'>
          {filteredList.map((item, i) => {
            return (
              <FlowerListItem key={i} item={item} />
            )
          })}
        </div>
      </div>

    </div>
  )
}

export default flowerList; 