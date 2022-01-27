import React, {useRef, useState} from 'react';
import  "./list.scss"

import {ArrowBackIosOutlined, ArrowForwardIosOutlined} from "@material-ui/icons"
import ListItems from '../listItems/listItems';


function List() {
  const listRef = useRef()
  const [slideNumber, setSlideNumber] = useState(0)
  const [isMoved, setisMoved] = useState(false);

  const handleClick = (direction) => {
    
    setisMoved(true)
    let distance = listRef.current.getBoundingClientRect().x - 50

    if (direction === "left" && slideNumber>0){
      setSlideNumber(slideNumber-1)
      listRef.current.style.transform = `translateX(${230 + distance}px)`
    }
    if (direction === "right" && slideNumber<6){
      setSlideNumber(slideNumber+1)
      listRef.current.style.transform = `translateX(${-230 + distance}px)`
    }
    console.log(distance);
  }

  return (
    <div className="list">
         <span className="listTitle">Continue to watch</span>
          <div className="wrapper">
            <ArrowBackIosOutlined className="sliderArrow left"  onClick={() => handleClick("left")} style={{display: !isMoved && 'none'}}/>
            <div className="container" ref={listRef} >
              <ListItems index={0}/>
              <ListItems index={1}/>
              <ListItems index={2}/>
              <ListItems index={3}/>
              <ListItems index={4}/>
              <ListItems index={5}/>
              <ListItems index={6}/>
              <ListItems index={7}/>
              <ListItems index={8}/>
              <ListItems index={9}/>
            </div>
            <ArrowForwardIosOutlined className="sliderArrow right" onClick={() => handleClick("right")}/>
          </div>
    </div>
)
}

export default List;
