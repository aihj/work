import React from 'react';
import { Snackbar, Typography } from '@mui/material';

const Toast = ({ 
  open, 
  onClose, 
  data, 
  vertical = 'bottom', 
  horizontal = 'right' 
}) => {
  // Destructure the first item from data array or use a fallback object
  const item = data[0] || {};

  return (
    <Snackbar
      anchorOrigin={{ vertical, horizontal }}
      open={open}
      autoHideDuration={3000}
      onClose={onClose}
      sx={{
        '& .MuiSnackbarContent-root': {
          backgroundColor: '#1e0055',
          color: '#ffffff',
          marginBottom: '4vh',
          width: '60vh'
        },
      }}
      message={
        <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
          <Typography variant="body1" style={{ fontWeight: "bold", fontSize: '15px' }}>
            {item.name}
          </Typography>
          <Typography
            variant="body2"
            style={{ color: "#A9A9C5", fontSize: "10px" }}
          >
            {item.type}
          </Typography>
          <Typography
            variant="body2"
            style={{ fontSize: "14px", color: "#A9A9C5" }}
          >
            {item.timestamp}
          </Typography>
        </div>
      }
      action={
        <Typography
          variant="body1"
          style={{ fontWeight: "bold", color: "#FFFFFF", marginLeft: "8px", fontSize:'18px' }}
        >
          <div>
            {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(item.amount)}
          </div>
        </Typography>
      }
      key={`${vertical}-${horizontal}`}
    />
  );
};

export default Toast;