// MessagePopup.js
import React, { useState } from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, Button, TextField } from '@mui/material';

const MessagePopup = ({ open, handleClose }) => {
  const [message, setMessage] = useState('');

  const handleSendMessage = () => {
    alert(`Message sent: ${message}`);
    setMessage('');
    handleClose();
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Send a Message</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          id="message"
          label="Message"
          type="text"
          fullWidth
          variant="standard"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleSendMessage} color="primary">Send</Button>
      </DialogActions>
    </Dialog>
  );
};

export default MessagePopup;
