import React from 'react'

import Featured from '../components/Featured/Featured'
import "./Home.scss"
import {Navbar} from "../components/navbar/Navbar"
import List from "../components/list/list"


function Home() {
    return (
        <div className="home">
           <Navbar/>
           <Featured/>
           <List/>
           <List/>
           <List/>
           <List/>
           <List/>
        </div>
    )
}

export default Home
