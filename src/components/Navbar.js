import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="nav-wrapper green darken-4">
          <div className="container">
            <Link to="/" className="brand-logo">
              Scrapwala
            </Link>
            <a
              href="#abc"
              data-target="mobile-demo"
              className="sidenav-trigger"
            >
              <img src="https://img.icons8.com/ios/50/000000/menu.png" />
            </a>
            <ul className="right hide-on-med-and-down">
              <li>
                <Link to="/price-list">Price List</Link>
              </li>
              <li>
                <Link to="/request-pickup">Request Pickup</Link>
              </li>
              <li>
                <Link to="/category-detect">Detect Category</Link>
              </li>
              <li>
                <Link to="/sign-in">Sign In</Link>
              </li>
              <li>
                <Link to="/sign-out">Sign Out</Link>
              </li>
            </ul>
          </div>
        </nav>
        <ul className="sidenav" id="mobile-demo">
          <li>
            <Link to="/price-list">Price List</Link>
          </li>
          <li>
            <Link to="/request-pickup">Request Pickup</Link>
          </li>
          <li>
            <Link to="/category-detect">Detect Category</Link>
          </li>
          <li>
            <Link to="/sign-in">Sign In</Link>
          </li>
          <li>
            <Link to="/sign-out">Sign Out</Link>
          </li>
        </ul>
      </div>
    );
  }
}
