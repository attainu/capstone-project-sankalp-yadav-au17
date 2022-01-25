import React from 'react'
import "./Navbar.scss"
import { useState } from "react";
import {Search, Notifications, ArrowDropDown} from "@material-ui/icons"


function Navbar() {
    const [isSrcolled, setIsSrcolled] = useState(false)

    window.onscroll = ()=>{
        setIsSrcolled(window.pageYOffset === 0 ? false : true)
        return ()=>(window.onscroll = null)
    }
    // console.log(isSrcolled);
    return (
        <div className={isSrcolled ?'navbar scrolled' : 'navbar'}>
            <div className='container'>
                <div className="left">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png" 
                    alt="logo" />
                    <span>Homepage</span>
                    <span>Series</span>
                    <span>Movies</span>
                    <span>New and Popular</span>
                    <span>My List</span>
                </div>
                <div className="right">
                    <Search className="icon"/>
                    <span>KIDS</span>
                    <Notifications className="icon"/>
                    <img src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />
                    <div className="profile">
                        <ArrowDropDown className="icon"/>
                        <div className="options">
                            <span>Settings</span>
                            <span>Logout</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export  {Navbar}
