import { useEffect, useState } from "react";
import AxiosHelper from "../helpers/AxiosHelper";
import { useDispatch, useSelector } from "react-redux";
import { setShowLoading, setUserInfo } from "../actions";
import { useHistory } from "react-router-dom";
export default function Users(props) {
  const [users, setUsers] = useState([]);
  const userInfo = useSelector((state) => state.userInfo);
  const history = useHistory();
  const dispatch = useDispatch();
  useEffect(() => {
    (async () => {
      try {
        dispatch(setShowLoading({ show: true, message: "Carregando..." }));
        const request = await AxiosHelper.get("/user/findAllUsers");
        setUsers(request.data);
        dispatch(setShowLoading({ show: false, message: "" }));
      } catch (error) {
        console.log(error);
        dispatch(setShowLoading({ show: false, message: "" }));
      }
    })();
  }, []);
  async function deleteUser(user) {
    try {
      dispatch(
        setShowLoading({ show: true, message: `Deletando ${user.email}...` })
      );
      let request = await AxiosHelper.delete("/user/deleteUser/" + user._id);
      if (user._id === userInfo._id) {
        localStorage.clear();
        dispatch(setUserInfo({}));
      } else {
        request = await AxiosHelper.get("/user/findAllUsers");
        setUsers(request.data);
      }
      dispatch(setShowLoading({ show: false, message: "" }));
    } catch (error) {
      console.log(error);
      dispatch(setShowLoading({ show: false, message: "" }));
      alert("Ops! Ocorreu um erro ao deletar");
    }
  }
  return (
    <div className="p-5">
      <a className="btn btn-primary" onClick={(e)=>{
        history.push('create-user')
      }}>
        Criar Usuário
      </a>
      <ul class="list-group list-group-horizontal mt-5">
        {users?.map((el) => {
          return (
            <li class="list-group-item card m-2" style={{ width: "20rem" }}>
              <img src={el?.photos?.shift()} class="card-img-top" alt="..." />
              <div class="card-body">
                <h6 class="card-title">{el.access}</h6>
                <p class="card-text">{el.email}</p>
                {userInfo.access === "MINISTRO" ? (
                  <button
                    className="btn btn-danger"
                    onClick={(e) => {
                      deleteUser(el);
                    }}
                  >
                    <span class="fas fa-trash"></span>
                  </button>
                ) : (
                  <></>
                )}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
