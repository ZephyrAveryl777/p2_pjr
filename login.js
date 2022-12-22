import React from "react";
import './login.css'

class Login extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="title">Registration</div>
        <form action="#">
          <div className="user__details">
            <div className="input__box">
              <span className="details">User Id</span>
              <input type="text" placeholder="E.g:54661" required />
            </div>
            <div className="input__box">
              <span className="details"> Name</span>
              <input type="text" placeholder="E.g: John Smith" required />
            </div>
            <div className="input__box">
              <span className="details">Email Id</span>
              <input
                type="email"
                placeholder="johnsmith@hotmail.com"
                required
              />
            </div>
            <div className="input__box">
              <span className="details">Phone Number</span>
              <input
                type="tel"
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                placeholder="012-345-6789"
                required
              />
            </div>
            <div className="input__box">
              <span className="details">Account Number</span>
              <input
                type="tel"
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                placeholder="012-345-6789"
                required
              />
            </div>
            <div className="input__box">
              <span className="details">Branch Code</span>
              <input
                type="tel"
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                placeholder="02-34"
                required
              />
            </div>
            <div className="input__box">
              <span className="details">State</span>
              <input type="text" placeholder="E.g: Andhra Pradesh" required />
            </div>
            <div className="input__box">
              <span className="details">City</span>
              <input type="text" placeholder="E.g: Vijayawada" required />
            </div>
            <div className="input__box">
              <span className="details">Date</span>
              <input type="text" placeholder="E.g:29/10/2001" required />
            </div>
          </div>
          <div className="button">
            <input type="submit" defaultValue="Register" />
          </div>
        </form>
      </div>
    );
  }
}

export default Login;
