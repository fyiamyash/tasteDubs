import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import TdAppbar from "./TdAppbar";
import { Typography } from '@mui/material';


function LogIn()
{
    const [username,setUserName] = React.useState('');
    const [password,setPassword] = React.useState('');
    const navigate = useNavigate();
    async function logInFunction(){
            try {
                const response = await fetch("http://localhost:3000/adminLogIn",{
                    method:"POST",
                    headers:{
                        "Content-Type":"application/json",
                        "username":username,
                        "password":password
                    }
                });
                const result = await response.json();
                if(result){
                localStorage.setItem("token",result.token);
                navigate('/menu')
                }

        } catch (error) {
            console.log(error)
        }
        }


    return<>
    <TdAppbar />
    <div style={{
         display: 'flex',
         justifyContent: 'center',
         marginTop:"100px",
         height: '100vh',
    }}>
      
    <Card sx={{ minWidth: 375,
                height:"400px",
                width:"30%",
                display: 'flex',
         justifyContent: 'center',
         flexDirection:"column",
         alignItems:"center",
         backgroundColor:" #FFFCF2ff",
         borderRadius:"15px"
                
    }}>
      <CardContent>
     <Typography variant='h4'> Admin Login  </Typography>
        
      </CardContent>
      <CardContent>
      <TextField id="username" label="Username" variant="outlined"  sx={{
        width:"350px"
      }} onChange={(e) =>{
        setUserName(e.target.value);
      }}  /> 
      </CardContent>
      <CardContent>
      <TextField id="password" label="Password" variant="outlined" sx={{
        width:"350px"
      }}  onChange={(e) =>{
        setPassword(e.target.value);
      }}/> 
      </CardContent>
      <CardContent>
      <Button variant="contained" sx={{
        backgroundColor: "white",
        color: "black",
        '&:hover': {
            backgroundColor: "lightyellow"
          }
        
      }} onClick={()=>{
        logInFunction();
      }}>Send</Button>
      </CardContent>
    </Card>
    </div>
    </>
}

export default LogIn;