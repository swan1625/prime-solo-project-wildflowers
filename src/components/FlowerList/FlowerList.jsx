import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import FlowerListItem from '../FlowerListItem/FlowerListItem';


// ---------MATERIAL UI STUFF-----
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


function flowerList(){

    const dispatch = useDispatch();
    const flowers = useSelector(store => store.flowerList);


    const [color, setColor] = useState('');
    const [filteredList, SetFilteredList] = useState(flowers);

   
    const filterByColor = (filteredData) => {
        console.log('this is filter list', filteredList );
      if (!color){
        return filteredData;
      }
      const filteredColor = filteredData.filter(
        (flower) => flower.color === color
      );
      return filteredColor;
    };


    const handleChange = (event) => {
      setColor(event.target.value);
      // filterByColor();
      console.log('test sdffdfglowers', filteredList);
    };

    useEffect(() => {
        // on page load, fetch these things
  
        // dispatch({ type: 'FETCH_FLOWERS' });
        let filteredData = filterByColor(flowers);
        SetFilteredList(filteredData);
      
    }, [color]);

console.log('flowers is', flowers);
console.log('color is',color);

    return (
<>

<Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Flowers By Color</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={color}
          label="Flowers By Color"
          onChange={handleChange}
        >
          <MenuItem value={'Red'}>Red Flowers ❤️</MenuItem>
          <MenuItem value={'Blue'}>Blue Flowers 💙 </MenuItem>
          <MenuItem value={'Purple'}>Pink/Purple Flowers 💜💓</MenuItem>
          <MenuItem value={'Orange'}>Orange Flowers 🧡</MenuItem>
          <MenuItem value={'White'}>White Flowers 🤍</MenuItem>
          <MenuItem value={'Yellow'}>Yellow Flowers 💛</MenuItem>
        </Select>
      </FormControl>
    </Box>


        
        <div>
        {filteredList.map((item, i) => {
                return (
                    <FlowerListItem key={i} item={item} />
                )
            })}

        </div>

        </>
    )
}

export default flowerList; 