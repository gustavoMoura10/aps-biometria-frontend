import React, { useEffect, useRef, useState } from "react";
import "../styles/LoginStyle.css";
import * as faceapi from "face-api.js";
import ModalAuth from "../components/ModalAuth";
import AxiosHelper from "../helpers/AxiosHelper";
import { useDispatch } from "react-redux";
import { setShowLoading, setUserInfo } from "../actions";
import { useHistory } from "react-router-dom";

export default function Login(props) {
  const [user, setUser] = useState({});
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();
  async function login(type, image) {
    console.log(user);
    try {
      console.log({ ...user, image });
      dispatch(setShowLoading({ show: true, message: "Fazendo Login" }));
      const request = await AxiosHelper.post(`/auth/login/${type}`, {
        ...user,
        image,
      });
      dispatch(setShowLoading({ show: false, message: "" }));
      localStorage.setItem("token", request.data.token);
      delete request.data.token;
      localStorage.setItem("user", JSON.stringify(request.data));
      dispatch(setUserInfo(request.data));
      history.push("/home");
    } catch (error) {
      dispatch(setShowLoading({ show: false, message: "" }));
      alert("OPSS, Não foi possível fazer login");
      console.log(error);
    }
  }
  return (
    <>
      <div
        className=" d-flex flex-column justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        <span class="fas fa-recycle h1 text-white"></span>
        <h2 className="text-white">Ministério do Meio Ambiente</h2>
        <div class="card" style={{ width: "25rem" }}>
          <div class="card-body text-center">
            <h5 class="card-title">Login</h5>
            <form>
              <div class="form-group ">
                <label for="email ">Email</label>
                <input
                  type="email"
                  class="form-control"
                  id="email"
                  aria-describedby="emailHelp"
                  placeholder="Email"
                  onChange={(e) => {
                    setUser({ ...user, email: e.target.value });
                  }}
                />
              </div>
              <div class="form-group">
                <label for="password">Senha</label>
                <input
                  type="password"
                  class="form-control"
                  id="password"
                  placeholder="Senha"
                  onChange={(e) => {
                    setUser({ ...user, password: e.target.value });
                  }}
                />
              </div>

              <button
                disabled={!user.email || !user.password}
                onClick={(e) => {
                  setShowModal(true);
                }}
                type="button"
                class="btn btn-primary"
              >
                Forma de Autenticação
              </button>
            </form>
          </div>
        </div>
      </div>
      <ModalAuth
        isVisible={showModal}
        setIsVisible={setShowModal}
        login={login}
      />
    </>
  );
}
