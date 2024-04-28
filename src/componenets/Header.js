import React,{useState} from 'react';
import {NavLink} from 'react-router-dom';
import {AppBar, Typography, Toolbar,Tabs, Tab} from '@mui/material';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';

const Header = () => {
    const [value,setValue]=useState(0);
  return (
    <div>
      <AppBar sx={{backgroundColor:'#232F3D'}} position='sticky'> 
        <Toolbar>
            <Typography>
                <LibraryBooksIcon/>
            </Typography>
            <Typography>
            Site hosted on Render.com, data loading may take 1-3 minutes. Apologies for any inconvenience.
            </Typography>
            <Tabs
            sx={{ml:'auto'}}
            textColor='inherit' 
            indicatorColor='secondary' 
            value={value} 
            onChange={(e,val)=>{setValue(val)}} >
                
                <Tab LinkComponent={NavLink} to='/AllBooks' label='Books' value={0}/>
                <Tab LinkComponent={NavLink} to='/add' label='Add Product' value={1}/>
                <Tab LinkComponent={NavLink} to='/aboutUs' label='About Us' value={2}/>
               

            </Tabs>
        </Toolbar>
      </AppBar>
      
    </div>
  )
}

export default Header

//
// 