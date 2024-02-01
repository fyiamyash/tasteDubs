import * as React from 'react';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import DeleteIcon from '@mui/icons-material/Delete';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import CardModal from './CardModal';

function SpeedDialComponent() {
    const [isModal,SetIsModal] = React.useState(false);
    const [checking,setChecking] = React.useState('');

    const handleDeleteClick =()=>{
      setChecking("delete");
      SetIsModal(true);
    }
    const handleCloseModal =()=>{
      SetIsModal(false);
    }
    const handleAddClick =()=>{
      setChecking("add");
      SetIsModal(true);
    }

    const actions = [
        { icon: <DeleteIcon />, name: 'delete',action:handleAddClick},
        { icon: <AddCircleOutlineIcon />, name: 'Add item',action:handleDeleteClick },
      ];
  return (
    <Box sx={{ height: 320, transform: 'translateZ(0px)', flexGrow: 1,}}>
      <SpeedDial
        ariaLabel="SpeedDial basic example"
        sx={{ position: 'absolute', bottom: 300, right: 20 }}
        icon={<SpeedDialIcon />}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            onClick={action.action}
          />
        ))}
      </SpeedDial>
      <CardModal open={isModal} onClose={handleCloseModal} checking={checking}/>
    </Box>
  );
}
export default SpeedDialComponent;

