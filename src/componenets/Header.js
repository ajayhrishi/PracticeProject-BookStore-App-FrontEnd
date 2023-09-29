import React,{useState} from 'react';
import {NavLink} from 'react-router-dom';
import {AppBar, Typography, Toolbar,Tabs, Tab} from '@mui/material';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';

const Header = () => {
    const [value,setValue]=useState();
  return (
    <div>
      <AppBar sx={{backgroundColor:'#232F3D'}} position='sticky'> 
        <Toolbar>
            <Typography>
                <LibraryBooksIcon/>
            </Typography>
            <Tabs
            sx={{ml:'auto'}}
            textColor='inherit' 
            indicatorColor='secondary' 
            value={value} 
            onChange={(e,val)=>{setValue(val)}} >

                <Tab LinkComponent={NavLink} to='/add' label='Add Product' />
                <Tab LinkComponent={NavLink} to='/books' label='Books'/>
                <Tab LinkComponent={NavLink} to='/aboutUs' label='About Us'/>

            </Tabs>
        </Toolbar>
      </AppBar>
      
    </div>
  )
}

export default Header
