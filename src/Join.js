import React, { useState } from "react";
import './App.css';

import tableIcon from './assets/table_black.png';


function Join() {
    const [selectedTables, setSelectedTables] = useState([]);
    const [showJoinIcon, setShowJoinIcon] = useState(false);
    const [showSalesAgent, setShowSalesAgent] = useState(false);
    const [showManager, setShowManager] = useState(false);
    const [showRegionalOffice, setShowRegionalOffice] = useState(false);
  
    const handleDrop = (event) => {
      event.preventDefault();
      const tableId = event.dataTransfer.getData("tableId");
      const table = document.getElementById(tableId);
      const clone = table.cloneNode(true);
      clone.id = `${tableId}-clone`;
      event.target.appendChild(clone);
  
      if (tableId === "sales_pipeline") {
        setShowSalesAgent(true);
        setShowManager(false);
        setShowRegionalOffice(false);
        setShowJoinIcon(false);
      } else if (tableId === "sales_teams") {
        setShowSalesAgent(false);
        setShowManager(true);
        setShowRegionalOffice(true);
        setShowJoinIcon(true);
      }
  
      const updatedSelectedTables = [...selectedTables, tableId];
      setSelectedTables(updatedSelectedTables);
    };
  
    const handleDragStart = (event, tableId) => {
      event.dataTransfer.setData("tableId", tableId);
    };
  
    const handleTableClick = (tableId) => {
      if (tableId === "sales_pipeline") {
        setShowSalesAgent(true);
        setShowManager(false);
        setShowRegionalOffice(false);
        setShowJoinIcon(false);
      } else if (tableId === "sales_teams") {
        setShowSalesAgent(false);
        setShowManager(true);
        setShowRegionalOffice(true);
        setShowJoinIcon(true);
      }
    };

    return (
      
      <div className="join1-container">
        <div className="join1-left">
        
          <div className="join1-items">
            <div className="join1-item">
            <img src={tableIcon} alt="Table" className="font"/>
              <p>accounts</p>
            </div>
            <div className="join1-item">
              <img src={tableIcon} alt="Table" />
              <p>clicks</p>
            </div>
            <div className="join1-item">
            <img src={tableIcon} alt="Table" />
              <p>products</p>
            </div>
  
            <div
              id="sales_pipeline"
              className={`join1-item${
                selectedTables.includes("sales_pipeline") ? " selected" : ""
              }`}
              draggable
              onDragStart={(e) => handleDragStart(e, "sales_pipeline")}
              onClick={() => handleTableClick("sales_pipeline")}
            >
              <img src={tableIcon} alt="Table" />
              <p>sales_pipeline</p>
            </div>
            <div
              id="sales_teams"
              className={`join1-item${
                selectedTables.includes("sales_teams") ? " selected" : ""
              }`}
              draggable
              onDragStart={(e) => handleDragStart(e, "sales_teams")}
              onClick={() => handleTableClick("sales_teams")}
            >
               <img src={tableIcon} alt="Table" />
              <p>sales_teams</p>
            </div>
          </div>
      </div>
        <div
          className="join1-right"
          onDrop={handleDrop}
          onDragOver={(e) => e.preventDefault()}
        >
          <div className="join1-droppable">
            {showSalesAgent && <div className="sales-agent"></div>}
            {showManager && <div className="manager">sales_agent  =  Manager</div>}
            {showRegionalOffice && 
              <div className="regional-office">Regional Office</div>
            }
            {showJoinIcon && <button>Join</button>}
          </div>
        </div>
      </div>
    
    );
  }
  
  export default Join;
  
 
 
  