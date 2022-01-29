import React from 'react'

import Featured from '../../components/Featured/Featured'
import "./Home.scss"
import {Navbar} from "../../components/navbar/Navbar"
import List from "../../components/list/list"


function Home({type}) {
    return (
        <div className="home">
           <Navbar/>
           <Featured type={type}/>
           <List/>
           <List/>
           <List/>
           <List/>
           <List/>
        </div>
    )
}

export default Home
