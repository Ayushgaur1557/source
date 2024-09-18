import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { Avatar, ListItem, ListItemAvatar, ListItemText, Divider } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  outline: "none",
  border: '2px solid #000',
  boxShadow: 24,
  p: 1,
};

const tasks = [1, 1, 1, 1];

export default function UserList({ handleClose, open }) {
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {tasks.map((item, index) => (
            <div key={index}>
              <div className='flex items-center justify-between w-full'>
                <div>
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar src='https://tse4.mm.bing.net/th?id=OIP.uMOlgOEPHQi6nimCisQfcgHaEK&pid=Api&P=0&h=180'></Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      secondary="@code_with_Libo"
                      primary={"Code With Limbo"}
                    />
                  </ListItem>
                </div>
                <div>
                  <Button className='customeButton'>Select</Button>
                </div>
              </div>
              {index !== tasks.length - 1 && <Divider variant='insert' />}
            </div>
          ))}
        </Box>
      </Modal>
    </div>
  );
}

