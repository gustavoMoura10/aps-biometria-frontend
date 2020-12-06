import React from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Navbar(props) {
  const userInfo = useSelector((state) => state.userInfo);
  const history = useHistory();
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a
        class="navbar-brand"
        onClick={(e) => {
          history.push("/home");
        }}
      >
        <span class="fas fa-recycle h1"></span>
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a
              class="nav-link"
              onClick={(e) => {
                history.push("/home");
              }}
            >
              Home
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              onClick={(e) => {
                history.push("/users");
              }}
            >
              Usuários
            </a>
          </li>
        </ul>
        <div class="my-2 my-lg-0">
          <span>{userInfo.email}</span>
        </div>
      </div>
    </nav>
  );
}
