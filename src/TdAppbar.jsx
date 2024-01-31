import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import LunchDiningIcon from '@mui/icons-material/LunchDining';
import { useNavigate,Link } from 'react-router-dom';
function TdAppbar()
{
  const navigate = useNavigate();
    return<>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: 'transparent', boxShadow: 'none' }}>
        <Toolbar>
        <Typography variant="h6" component="div" sx={{ color: 'black',marginTop:'7px'}}>
        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}> <LunchDiningIcon /> </Link>
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: 'black', marginLeft: '8px' }}>
          <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>Taste Dubs</Link>
          </Typography>
          <Button color="secondary" onClick={()=>{
            navigate('/menu');
          }}>
            <Typography variant="h6" component="div" sx={{  color: 'black', marginLeft: '8px',marginRight: '10px', textTransform: 'none' }}>
                Menu
                </Typography>
                </Button>
          <Button color="inherit" onClick={()=>{
            navigate('/logIn');
          }}>
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




