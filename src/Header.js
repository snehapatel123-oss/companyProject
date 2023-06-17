import React, { useState } from "react";
import "./index.css";
import Join from "./Join";
import homeIcon from './assets/home_1.png';
import twitterIcon from './assets/twitter_1.png';
import tableIcon from './assets/table_black.png';


const welcome ={
    fontSize:'50px',
    color:'green',
    margin:'250px',
    
};


function Header() {
  const [content, setContent] = useState(
    <p style={welcome}>"Welcome to CRM"</p>
  
  );
  

  const handleJoinClick = () => {
    setContent(<Join />);
  };

  const handleFilterClick = () => {
    setContent("Filter clicked");
  };

  const homeClicked=()=>{
    setContent("Home clicked");
  };
  const twitterClicked=()=>{
    setContent("Twitter clicked");
  };
  const tableClicked=()=>{
    setContent(<p style={welcome}>"Welcome to CRM"</p>);
  };

 

     
    const headerStyles = {
      display: 'flex',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      padding: '10px',
      backgroundColor: '#f1f1f1',
    };
  
    const iconStyles = {
      width: '30px',
      height: '30px',
      margin: '0 10px',
    };
  


  return (
    <>
     <div className="header" style={headerStyles}>
      <img src={homeIcon} alt="Home" style={iconStyles} onClick={homeClicked}/>
      <img src={twitterIcon} alt="Twitter" style={iconStyles} onClick={twitterClicked}/>
      <img src={tableIcon} alt="Table" style={iconStyles} onClick={tableClicked}/>   
    </div>
      <div>
        <button className="button" onClick={handleJoinClick}>
          Join
        </button>
        <button className="button" onClick={handleFilterClick}>
          Filter
        </button>
      </div>
      <div className="container">
        <div className="content">{content}</div>
      </div>
    </>
  );
}
  
  export default Header;
