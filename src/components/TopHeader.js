import React from 'react';
import TemporaryDrawer from './Drawer';
import './TopHeader.css';
import Avatar from '@mui/material/Avatar';
import tonyfan from '../components/assets/images/tonyfan.jpg'
import halo from '../components/assets/images/halo.png'
import Stack from '@mui/material/Stack';
import TextAnimation from './animations/TextColorAnimation';

function TopHeader() {
  return (
    <div style={{ backgroundColor:"rgb(0, 0, 0,0.8)", backgroundImage: `url(${halo})`, backgroundSize:'contain', backgroundRepeat:'no-repeat', backgroundPosition:'center' }}>
      <div>
        <TemporaryDrawer />
      </div>
      <div class='row topheader'>
        <div style={{marginTop: '210px', marginBottom: '9%'}}>
          <Stack>
            <Avatar className="avatar" alt="Tony Fan" variant="circular" src={tonyfan} sx={{ width: 300, height: 300, margin: 'auto', objectFit: 'cover', border: 0 }} />
          </Stack>
        </div>
        <TextAnimation />
      </div>
    </div>
  );
}

export default TopHeader;
