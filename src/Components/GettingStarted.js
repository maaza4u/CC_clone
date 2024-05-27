import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, List, ListItem, ListItemText } from '@mui/material';

const GettingStarted = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const items = [
    { title: 'Introduction', content: 'This is the introduction content.' },
    { title: 'Setup', content: 'This is the setup content.' },
    { title: 'Configuration', content: 'This is the configuration content.' },
    { title: 'Usage', content: 'This is the usage content.' },
  ];

  const handleClick = (item) => {
    setSelectedItem(item);
  };

  const handleClose = () => {
    setSelectedItem(null);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Getting Started</h1>
      <List>
        {items.map((item, index) => (
          <ListItem button key={index} onClick={() => handleClick(item)}>
            <ListItemText primary={item.title} />
          </ListItem>
        ))}
      </List>

      <Dialog open={!!selectedItem} onClose={handleClose}>
        <DialogTitle>{selectedItem?.title}</DialogTitle>
        <DialogContent>
          <p>{selectedItem?.content}</p>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default GettingStarted;
