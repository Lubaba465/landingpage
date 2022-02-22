import React,{useState,useEffect} from "react";
import {AppBar, Toolbar, IconButton, Menu} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

const Header = () =>{
    const [headerShow, setHeaderShow]=useState(false);


    return(
        <AppBar position="fixed" style={{
            backgroundColor:headerShow ? '#fbf3ec': 'transparent',
            boxShadow:"none",
            padding:'10px 0px'
        }}>


            <Toolbar>



                <IconButton aria-label="Menu" color='inherit'>
                    <div className="header_logo">
                        <div className=" font_righteous header_logo_venue"> The Venue</div>
                        <div className="header_logo_title"> Musical Events</div>

                    </div>





                </IconButton>


            </Toolbar>
        </AppBar>


    )
}
export default Header;