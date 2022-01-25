import { PlayArrow, Add, ThumbUpAltOutlined, ThumbDownOutlined } from '@material-ui/icons';
import React from 'react';
import "./listItems.scss"


function ListItems() {
  return <div className="listItems">
      <img src="https://occ-0-1723-92.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABU7D36jL6KiLG1xI8Xg_cZK-hYQj1L8yRxbQuB0rcLCnAk8AhEK5EM83QI71bRHUm0qOYxonD88gaThgDaPu7NuUfRg.jpg?r=4ee"
       alt=""
      />
      <div className="iteminfo">
        <div className="icons">
          <PlayArrow/>
          <Add/>
          <ThumbUpAltOutlined/>
          <ThumbDownOutlined/>
        </div>
        <div className="iteminfoTop">
          <span>1 hour 14 min</span>
          <span className="limit">+16</span>
          <span>1999</span>
        </div>
        <div className="desc">
          Lorem, ipsum dolor sit amet consectetur
          adipisicing elit. Provident dolor repellendus,
          perferendis dignissimos quas quod.
        </div>
        <div className="genre">
          Action          
        </div>
      </div>
  </div>;
}

export default ListItems;
