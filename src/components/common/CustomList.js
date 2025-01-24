import React from 'react';
import { List, ListItem, ListItemText } from '@mui/material';

const CustomList = ({ check }) => {
  return (
    <div className="z-0" style={{ marginLeft: '5.8vh' }}>
      <List
        sx={{
          width: '100%',
          maxWidth: 430,
          bgcolor: 'background.paper',
          textAlign: 'right',
          alignItems: 'right',
        }}
      >
        {check.map((item, index) => (
          <ListItem key={index}>
            <ListItemText
              primary={item.name}
              secondary={item.type}
              sx={{
                flex: '1',
                textAlign: 'left',
                fontSize: '18px',
                '& .MuiListItemText-primary': {
                  fontSize: '1.5rem',
                },
                '& .MuiListItemText-secondary': {
                  fontSize: '1.2rem',
                },
              }}
            />
            <ListItemText
              primary={new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD',
              }).format(item.amount)}
              secondary={item.timestamp}
              sx={{
                flex: '1',
                textAlign: 'right',
                fontSize: '18px',
                '& .MuiListItemText-primary': {
                  fontSize: '1.5rem',
                  color: '#1e0055',
                  fontWeight: 'bold',
                },
                '& .MuiListItemText-secondary': {
                  fontSize: '1.2rem',
                },
              }}
            />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default CustomList;
