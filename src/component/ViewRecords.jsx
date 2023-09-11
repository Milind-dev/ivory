import React, { useState } from "react";
import "../css/viewrecords.css";
import Paginations from "./Paginations";

export default function ViewRecords() {
  const localdata = JSON.parse(localStorage.getItem("item")) || [];
  const [viewdata , setViewdata] = useState(localdata);

  const handledelete = (index) => {
    const deleteitem = [...viewdata]; 
    deleteitem.splice(index, 1);
    console.log("localdata",localdata);
    localStorage.setItem("item", JSON.stringify(deleteitem));
    setViewdata(deleteitem);
  }
  return (
    <React.Fragment>
      <h3 className="viewrecord"> View Records </h3>
      <Paginations localdatas = {localdata} />
      {/* {viewdata.map((item,index) => {
            return (
              <>
                <div key={index} className="viewRecordContainer">
                  <h3>{item.names}</h3>
                  <h3>{item.contact}</h3>
                  <h3>{item.pincode}</h3>
                  <button onClick = {(e) => handledelete(`${item.id}`)} > Delete </button>
                </div>
              </>
            );
          })
        } */}
      
    </React.Fragment>
  );
}
