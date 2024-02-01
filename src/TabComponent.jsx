import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { tabValue } from './store/atoms/tabValue';

function TabComponent() {
    const [value, setValue] = React.useState(0);
    const setTabValue = useSetRecoilState(tabValue)
    const myval = useRecoilValue(tabValue);
    const handleChange = (event, newValue) => {
        setValue(newValue);
        setTabValue(newValue);
    };
    return (
        <Box sx={{ width: '100%', bgcolor: 'Transparent' }}>
          <Tabs value={value} onChange={handleChange} centered 
          indicatorColor="secondary" 
          TabIndicatorProps={{ style: { backgroundColor: 'black' } }}>
            <Tab label="Burgers" sx={{fontWeight:'Bold',color: value === 0 ? 'black' : 'inherit'}}/>
            <Tab label="Wraps" sx={{fontWeight:'Bold',color: value === 0 ? 'black' : 'inherit'}}/>
            <Tab label="Sliders" sx={{fontWeight:'Bold',color: value === 0 ? 'black' : 'inherit'}}/>
          </Tabs>
        </Box>
      );
}

export default TabComponent;