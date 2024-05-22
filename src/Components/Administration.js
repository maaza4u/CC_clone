import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, List, ListItem, ListItemText, Typography } from '@mui/material';

const Administration = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setDialogOpen(true);
  };

  const renderDetail = () => {
    switch (selectedItem) {
      case 'User Management':
        return <p>Detail about User Management...</p>;
      case 'System Logs':
        return <p>Detail about System Logs...</p>;
      case 'Backup & Restore':
        return <p>Detail about Backup & Restore...</p>;
      default:
        return <p>Select an item to view details.</p>;
    }
  };

  const handleClose = () => {
    setDialogOpen(false);
    setSelectedItem(null);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Administration</h1>
      <div className="flex space-x-4">
        <div className="flex-1">
          <ul className="list-disc pl-5 cursor-pointer">
            {['User Management', 'System Logs', 'Backup & Restore'].map((item) => (
              <li key={item} onClick={() => handleItemClick(item)} className="hover:underline">
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex-1">
          <h2 className="text-xl font-semibold">{selectedItem}</h2>
          {renderDetail()}
        </div>
      </div>

      {/* Dialog for displaying the content */}
      <Dialog
        open={dialogOpen}
        onClose={handleClose}
        aria-labelledby="dialog-title"
      >
        <DialogTitle id="dialog-title">{selectedItem}</DialogTitle>
        <DialogContent>
          {renderDetail()}
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

export default Administration;
