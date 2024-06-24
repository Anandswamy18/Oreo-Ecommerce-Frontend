import React, { useState } from 'react';
import './Header.css';
import { Menu, MenuItem } from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import SearchIcon from '@mui/icons-material/Search';
import FlagIcon from '@mui/icons-material/Flag';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import MarkunreadIcon from '@mui/icons-material/Markunread';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import RadioIcon from '@mui/icons-material/Radio';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import Logo from '../../assets/LogoOreo.png';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setMenuOpen(true);
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setMenuOpen(false);
    setAnchorEl(null);
  };

  return (
    <div className='tracking-in-expand'>
      <nav className='nav-header'>

        <div className='text-focus-in'>
          <img src={Logo} alt="" height={35} />
          <span className='logoName'>OREO</span>
        </div>
        {window.innerWidth < 425 && (
          <>
            <MenuIcon className='menuButton' onClick={handleMenuOpen}>

            </MenuIcon>
            <Menu
              anchorEl={anchorEl}
              open={menuOpen}
              onClose={handleMenuClose}
              PaperProps={{
                style: {
                  backgroundColor: '#8c99e0',
                  boxShadow: '0 4px 8px -4px rgba(0, 0, 0, 0.9)',
                  borderRadius: '8px',
                },
              }}
            >
              <MenuItem onClick={handleMenuClose}><CompareArrowsIcon className='otherIcons' /> </MenuItem>
              <MenuItem onClick={handleMenuClose}><RadioIcon className='otherIcons' /> </MenuItem>
              <MenuItem onClick={handleMenuClose}><MarkunreadIcon className='otherIcons' /></MenuItem>
              <MenuItem onClick={handleMenuClose}><ContactPhoneIcon className='otherIcons' /></MenuItem>
              <MenuItem onClick={handleMenuClose}><NotificationsIcon className='otherIcons' /></MenuItem>
              <MenuItem onClick={handleMenuClose}><FlagIcon className='otherIcons' /> </MenuItem>
            </Menu>
          </>
        )}
        {window.innerWidth >= 425 && (
          <div className='Icons-box'>
            <CompareArrowsIcon className='otherIcons' />
            <RadioIcon className='otherIcons' />
            <MarkunreadIcon className='otherIcons' />
            <ContactPhoneIcon className='otherIcons' />
            <NotificationsIcon className='otherIcons' />
            <FlagIcon className='otherIcons' />
          </div>
        )}

        <InputBase
          className='searchBar'
          placeholder="Search..."
          inputProps={{ 'aria-label': 'search' }}
          endAdornment={<SearchIcon style={{ color: 'gray', marginRight: "10px" }} />}
        />

        <div className='nav-power'>
          <SettingsIcon fontSize="small" style={{ color: 'white' }} />
          <PowerSettingsNewIcon fontSize="small" style={{ color: 'white' }} />
        </div>
      </nav>
    </div>
  );
}

export default Header;

