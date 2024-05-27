import React from 'react';
import { Drawer, List, ListItem, ListItemText } from '@mui/material';

const FloatingWindow = ({ open, handleClose, items, handleItemClick }) => {
  return (
    <Drawer
      anchor="bottom"
      open={open}
      onClose={handleClose}
      PaperProps={{
        style: {
          width: '200px', // Set the width of the drawer
          height: '200px', // Set the height of the drawer
          position: 'fixed', // Fix position
          bottom: '0', // Align to bottom
          left: '0', // Align to left
          margin: '0', // Remove any margin
          borderRadius: '0 0 8px 0', // Optional: Add border radius to top right corner
        },
      }}
    >
      <div style={{ padding: '16px', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',paddingRight: '0px' }}>
        <List>
          {items.map((item, index) => (
            <ListItem key={index} onClick={() => handleItemClick(item)}>
              <ListItemText primary={item} />
            </ListItem>
          ))}
        </List>
      </div>
    </Drawer>
  
    
    );
};

export default FloatingWindow;
