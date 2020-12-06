import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { setUserInfo } from "../actions";

export default function Sidebar(props) {
  const dispatch = useDispatch();
  const history = useHistory();
  const userInfo = useSelector((state) => state.userInfo);
  return (
    <div className="d-flex flex-column bg-dark p-3">
      <ul class="nav flex-column flex-grow-1">
        <li
          class="nav-item"
          onClick={(e) => {
            history.push("/banidos");
          }}
        >
          <a class="nav-link">Agrotóxicos Banidos</a>
        </li>
        {userInfo.access === "MINISTRO" || userInfo.access === "SECRETARIO" ? (
          <li
            class="nav-item"
            onClick={(e) => {
              history.push("/empresas");
            }}
          >
            <a class="nav-link">Empresas de Agrotóxicos</a>
          </li>
        ) : (
          <></>
        )}
        {userInfo.access === "MINISTRO" ? (
          <li
            class="nav-item"
            onClick={(e) => {
              history.push("/legalizados");
            }}
          >
            <a class="nav-link">Agrotóxicos Legalizados</a>
          </li>
        ) : (
          <></>
        )}
      </ul>
      <ul class="nav flex-column">
        <li class="nav-item">
          <a
            class="nav-link"
            onClick={(e) => {
              localStorage.clear();
              dispatch(setUserInfo({}));
            }}
          >
            Sair
          </a>
        </li>
      </ul>
    </div>
  );
}
