import Axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, Route, Switch, useHistory } from "react-router-dom";
import { setUserInfo } from "../actions";
import AxiosHelper from "../helpers/AxiosHelper";
import Banned from "../views/Banned";
import CreateUser from "../views/CreateUsers";
import Enterprises from "../views/Enterprises";
import Home from "../views/Home";
import Legalized from "../views/Legalized";
import Login from "../views/Login";
import Users from "../views/Users";
export default function Routes(props) {
  const history = useHistory();
  const userInfo = useSelector((state) => state.userInfo);
  const dispatch = useDispatch();
  useEffect(() => {
    (async () => {
      const userStorage = JSON.parse(localStorage.getItem("user"));
      const tokenStorage = localStorage.getItem("token");
      dispatch(setUserInfo(userStorage));
      if (
        userStorage &&
        tokenStorage &&
        history.location.pathname.includes("login")
      ) {
        try {
          const request = await AxiosHelper.get("/auth/newToken");
          const { token } = request.data;
          localStorage.setItem("token");
          history.push("/home");
        } catch (error) {
          console.log(error)
          localStorage.clear();
          dispatch(setUserInfo({}))
          history.push("/login");
        }
      }
    })();
  }, []);
  useEffect(() => {
    const userJSON = JSON.parse(localStorage.getItem("user"));
    const token = localStorage.getItem("token");
    if (!userJSON && !token && !history.location.pathname.includes("login")) {
      dispatch(setUserInfo({}));
      history.push("/login");
    }
  }, [userInfo]);
  return (
    <Switch>
      <Route exact path="/login">
        <Login />
      </Route>
      {userInfo?._id ? (
        <>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/users">
            <Users />
          </Route>
          <Route exact path="/create-user">
            <CreateUser />
          </Route>
          <Route exact path="/banidos">
            <Banned />
          </Route>
          {userInfo.access === "MINISTRO" ||
          userInfo.access === "SECRETARIO" ? (
            <Route exact path="/empresas">
              <Enterprises />
            </Route>
          ) : (
            <></>
          )}
          {userInfo.access === "MINISTRO" ? (
            <Route exact path="/legalizados">
              <Legalized />
            </Route>
          ) : (
            <></>
          )}
        </>
      ) : (
        <></>
      )}
      <Route exact path="/">
        <Redirect to="/login" />
      </Route>
    </Switch>
  );
}
