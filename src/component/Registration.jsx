import React, {  useState } from "react";
import "../css/registration.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { v4 as uuidv4 } from 'uuid';
import mainLogo from "../asset/img/online-registration.png";

export default function Registration() {
  const [id, setId] = useState("");
  const [names, setNames] = useState("");
  const [city, setCity] = useState("");
  const [contact, setContact] = useState("");
  const [pincode, setPincode] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    var items = JSON.parse(localStorage.getItem("item") || "[]");
    var taskitem = {
        id: uuidv4(), //unique id
        // id: id,
        names: names,
        city: city,
        contact: contact,
        pincode: pincode,
        email: email,
        password: password,
    };
    items.push(taskitem);
    localStorage.setItem("item", JSON.stringify(items));
  };

  return (
    <React.Fragment>
      <div>
        <p>Registration</p>
        <img className="regitrationicon" src={mainLogo} alt="RegisterIcon" />
      </div>
      <div>
        <form className="formcontainer" onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="number"
              className="form-control"
              value={id}
              onChange={(e) => setId(e.target.value)}
              placeholder="id"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              value={names}
              onChange={(e) => setNames(e.target.value)}
              placeholder="name"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              placeholder="city"
            />
          </div>
          <div className="form-group">
            <input
              type="number"
              className="form-control"
              value={pincode}
              onChange={(e) => setPincode(e.target.value)}
              placeholder="pincode"
            />
          </div>
          <div className="form-group">
            <input
              type="number"
              className="form-control"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              maxLength={10}
              placeholder="contact"
            />
          </div>

          <div className="form-group">
            <input
              type="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
          </div>
          <div className="form-group form-check">
            <input
              type="checkbox"
              className="form-check-inputs"
              value="gender"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Register
          </button>
        </form>
      </div>
    </React.Fragment>
  );
}
