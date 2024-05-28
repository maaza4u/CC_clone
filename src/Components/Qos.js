import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, List, ListItem, ListItemText } from '@mui/material';

const QoS = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const items = [
    { title: 'Qos Settings', content: 'This is the Qos Settings.' },
    { title: 'Traffic Shaping', content: 'Detail about Traffic Shaping...' },
    { title: 'Bandwidth Management', content: 'Detail about Bandwidth Management...' },
    // { title: 'Usage', content: 'This is the usage content.' },
  ];

  const handleClick = (item) => {
    setSelectedItem(item);
  };

  const handleClose = () => {
    setSelectedItem(null);
  };

  // const renderDetail = () => {
  //   switch (selectedItem) {
  //     case 'QoS Settings':
  //       return <p>Detail about QoS Settings...</p>;
  //     case 'Traffic Shaping':
  //       return <p>Detail about Traffic Shaping...</p>;
  //     case 'Bandwidth Management':
  //       return <p>Detail about Bandwidth Management...</p>;
  //     default:
  //       return <p>Select an item to view details.</p>;
  //   }
  // };

 

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Qos</h1>
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

export default QoS;
