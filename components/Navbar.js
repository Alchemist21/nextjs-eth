import Link from 'next/link';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import WalletConnectProvider from "@walletconnect/web3-provider";
import Web3Modal from 'web3modal';

import { HashRouter, Route, useNavigate } from 'react-router-dom';


//WalletConnect Provider
const provider = new WalletConnectProvider({
  rpc: {
    4: "https://eth-rinkeby.gateway.pokt.network/v1/lb/62b7234c123e6f0039842814"

    // ...
  },
});


function Navbar() {


// @ts-ignore


  return (
 
  <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            NEXTJS-ETH
          </Typography>

          <Button color="inherit">Connect</Button>
        </Toolbar>
      </AppBar>
    </Box>
);
}

export default Navbar 