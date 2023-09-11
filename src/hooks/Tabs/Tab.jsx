import React, { useState } from 'react'
import '../../css/Tab.css'
import Registration from '../../component/Registration';
import ViewRecords from '../../component/ViewRecords';

export default function Tab() {
    const [activeTab, setActiveTab] = useState("registertab");
    const handleTab1 = () => {
      setActiveTab("registertab");
    };
    const handleTab2 = () => {
      setActiveTab("viewrecords");
    };

    return (
      <div className="Tabs">
        <ul className="nav">
          <li
            className={activeTab === "registertab" ? "active" : ""}
            onClick={handleTab1}
          >
             Register
          </li>
          <li
            className={activeTab === "viewrecords" ? "active" : ""}
            onClick={handleTab2}
          >
            viewpaginate 
          </li>
        </ul>
   
        <div className="outlet">
          {activeTab === "viewrecords" ? <ViewRecords /> : <Registration />}
        </div>
      </div>
  );
}
