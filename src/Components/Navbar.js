import React from "react";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <div>
      <nav
        className={`navbar navbar-expand-lg navbar-${props.swth} bg-${props.swth} border border-dark rounded`}
      >
        <Link
          className={`navbar-brand text-{${
            props.swth === "dark" ? "light" : "dark"
          }}`}
          to="/"
        >
          TextUtils
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link
                className={`navbar-brand text-{${
                  props.swth === "dark" ? "light" : "dark"
                }}`}
                to="/about"
              >
                About
              </Link>
            </li>
          </ul>
        </div>

        <div className="container-sm  bar" role="group">
          <button
            className="rounded-circle clrbtn bg-danger"
            onClick={ props.switchmode}
            name="danger"
          ></button>
          <button
            className="rounded-circle clrbtn bg-primary"
            onClick={ props.switchmode}
            name="primary"
          ></button>
          <button
            className="rounded-circle clrbtn bg-success"
            onClick={props.switchmode}
            name="success"
          ></button>
        </div>

        {/* switch */}
        <div className="form-check form-switch">
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault"
            onClick={props.switchmode}
            name="light"
          />
          <label
            className="form-check-label text-dark"
            htmlFor="flexSwitchCheckDefault"
          >
            Enable dark mode
          </label>
        </div>
      </nav>
    </div>
  );
}
