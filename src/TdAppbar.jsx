import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import LunchDiningIcon from '@mui/icons-material/LunchDining';
function TdAppbar()
{
    return<>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: 'transparent', boxShadow: 'none' }}>
        <Toolbar>
        <Typography variant="h6" component="div" sx={{ color: 'black',marginTop:'7px'}}>
          <LunchDiningIcon />
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: 'black', marginLeft: '8px' }}>
            Taste Dubs
          </Typography>
          <Button color="secondary">
            <Typography variant="h6" component="div" sx={{  color: 'black', marginLeft: '8px',marginRight: '10px', textTransform: 'none' }}>
                Home
                </Typography>
                </Button>
          <Button color="inherit">
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: 'black',textTransform: 'none'}}>
            Login
            </Typography>
            </Button>
        </Toolbar>
      </AppBar>
    </Box>
    </>
}
export default TdAppbar;




