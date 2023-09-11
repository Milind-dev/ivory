import React, { useState } from "react";
import "../css/viewrecords.css";

export default function Paginations({ localdatas }) {
  const [pages, setpage] = useState(localdatas);
  const [viewdata, setViewdata] = useState(localdatas);

  //   page handling
  const handlepage = (index) => {
    const pagestart = index;
    const limitation = Math.ceil(localdatas.length / 3);
    const startIndex = (pagestart - 1) * limitation + 1;
    const endIndex = pagestart * limitation + 1;
    const pageshow = localdatas.slice(startIndex, endIndex);
    console.log(pageshow);
    setpage([...pageshow]);
    console.log(
      "pageshow",
      pagestart,
      limitation,
      startIndex,
      endIndex,
      pageshow
    );
    console.log(pages);
  };

  //delete items
  const handledelete = (index) => {
    const deleteitem = [...viewdata];
    deleteitem.splice(index, 1);
    console.log("localdata", localdatas);
    localStorage.setItem("item", JSON.stringify(deleteitem));
    setViewdata(deleteitem);
    window.location.reload(true);
  };

  return (
    <div>
      {localdatas.map((el, index) => {
        return (
          <>
            <button key={index} onClick={() => handlepage(index + 1)}>
              {" "}
              {index}
            </button>
          </>
        );
      })}
      {/* {localdatas.map((el, index) => {
        return (
          <>
          
            <button key={index} onClick={() => handlepage(index+1)}>
            
              {" "}
              {index}
            </button>
          </>
        );
      })} */}
      {/* delete with uuidv4 */}
      {pages.map((el, index) => {
        return (
          <>
            <div key={index} className="viewRecordContainer">
              <h3>id = {el.id}</h3>
              <h3>names = {el.names}</h3>
              <h3>email = {el.email}</h3>
              <h3>contact = {el.contact}</h3>
              <h3>city = {el.city}</h3>
              <h3>pincode= {el.pincode}</h3>
              <button onClick={(e) => handledelete(`${el.id}`)}>
                {" "}
                Delete{" "}
              </button>
            </div>
          </>
        );
      })}
    </div>
  );
}
