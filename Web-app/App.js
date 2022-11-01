import './App.css';
import React, { useState } from 'react';
import { ethers } from 'ethers';

import Lock from "./artifacts/contracts/refund.sol/Refund.json"

const LockAddress = "0x5FC8d32690cc91D4c39d9d3abcBD16989F875707"

function App() {
  const [inputList, setInputList] = useState([{ EmpName: "", publicAddress: "" }]);

  // handle input change
  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputList];
    list[index][name] = value;
    setInputList(list);
  };

  // handle click event of the Remove button
  const handleRemoveClick = index => {
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);
  };

  // handle click event of the Add button
  const handleAddClick = () => {
    setInputList([...inputList, { EmpName: "", publicAddress: "" }]);
  };

  return (
    <div className="App">
      <div className="App-header">
        {/* DESCRIPTION  */}
        <div className="description">
          <p><i>An Ethereum dApp using ReactJS and Hardhat</i></p>
          <h3>Setting up the Requirements of Employee Location Tracking</h3>
          <hr />
        </div>
        {inputList.map((x, i) => {
          return (
            <div className="box">
              <input
                name="EmpName"
                placeholder="Enter Employee Name"
                value={x.EmpName}
                onChange={e => handleInputChange(e, i)}
              />
              <input
                className="ml10"
                name="publicAddress"
                placeholder="Employee Public Address"
                value={x.publicAddress}
                onChange={e => handleInputChange(e, i)}
              />
              {inputList.length !== 1 && <button
                className="btn-box"
                onClick={() => handleRemoveClick(i)}>Remove</button>}
              {inputList.length - 1 === i && <button onClick={handleAddClick} className="btn-box">Add</button>} 
            </div>
          );
        })}
        <div className='result'>{JSON.stringify(inputList)}</div>
        <div className="ml10">
            <input
                className="ml10"
                name="latitude"
                placeholder="Latitude"
                value=""
            />
        </div>
        <div className="ml10">
            <input
                className="ml10"
                name="longitude"
                placeholder="Longitude"
                value=""
            />
        </div>
        <div className="ml10">
            <input
                className="ml10"
                name="allowedDistance"
                placeholder="Allow distance from the range"
                value=""
            />
        </div> 
        <div className="ml10">
            <input
                className="ml10"
                name="amount"
                placeholder="Amount to be Paid"
                value=""
            />
        </div>
        <div className="custom-buttons"> 
          <br/>
          <button onClick={"setGreeting"} style={{ backgroundColor: "Green" }}>
            Set Requirements
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;