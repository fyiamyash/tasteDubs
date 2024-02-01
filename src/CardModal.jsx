import React, { useState } from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

function CardModal({ open, onClose, checking }) {
  const navigate = useNavigate();
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState(0)
  const [id, setId] = useState(0)
  const handleAdd = (e) => {
    e.preventDefault();
    async function addItem()
    {
      const response = await fetch("http://localhost:3000/addMenu",{
        method:"POST",
        headers:{
          "Content-Type": "application/json",
          "Authorization":"Bearer "+localStorage.getItem("token")
        },
        body:JSON.stringify({
          "title":title,
          "description":description,
          "price":price
        })
      })
      const result = await response.json();
      onClose();
      navigate('/menu');
    }
    addItem();

  };

  const handleDel =(e)=>{
    e.preventDefault();
    async function deleteItem()
    { try {
      const response = await fetch(`http://localhost:3000/delete/${id}`,{
        method:"DELETE",
        headers:{
          "Content-Type": "application/json",
          "Authorization":"Bearer "+localStorage.getItem("token")
        }
      })

      const result = await response.json();
      onClose();
      navigate('/menu')
    }catch(error)
    {
      console.log(error)
    }
    }
    deleteItem();
  }

  if (checking == "delete") {
    return (
      <Modal
        open={open}
        onClose={onClose}
        aria-labelledby="card-modal-title"
        aria-describedby="card-modal-description"
      >
        <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', bgcolor: 'background.paper', boxShadow: 24, p: 4, width: "400px", borderRadius: "10px" }}>
          <form onSubmit={handleAdd}>
            <TextField id="Title" onChange={(e) => {
              setTitle(e.target.value);
            }} label="Title" variant="outlined" fullWidth sx={{ mb: 2 }} />
            <TextField id="description" onChange={(e) => {
              setDescription(e.target.value);
            }} label="Description" variant="outlined" fullWidth sx={{ mb: 2 }} />
            <TextField id="price" onChange={(e) => {
              setPrice(e.target.value);
            }} label="Price" variant="outlined" fullWidth sx={{ mb: 2 }} />
            <Button type="submit" variant="contained" color="primary" width="200px" sx={{ mx: 'auto', width: '200px', display: 'block' }}>
              ADD
            </Button>
          </form>
        </Box>
      </Modal>
    );
  }
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="card-modal-title"
      aria-describedby="card-modal-description"
    >
      <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', bgcolor: 'background.paper', boxShadow: 24, p: 4, width: "400px", borderRadius: "10px" }}>
        <form  onSubmit={handleDel}>
          <TextField id="outlined-basic" onChange={(e)=>{
            setId(e.target.value);
          }} label="Item ID" variant="outlined" fullWidth sx={{ mb: 2 }} />
          <Button type="submit" variant="contained" color="primary" width="200px" sx={{ mx: 'auto', width: '200px', display: 'block' }}>
            Delete
          </Button>
        </form>
      </Box>
    </Modal>
  );
}

export default CardModal;
