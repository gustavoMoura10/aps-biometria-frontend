import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { setShowLoading } from "../actions";
import AxiosHelper from "../helpers/AxiosHelper";

export default function CreateUser(props) {
  const [user, setUser] = useState({
    photos: [],
  });
  const history = useHistory();
  const userInfo = useSelector((state) => state.userInfo);
  const dispatch = useDispatch();
  const toBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  async function saveUser(e) {
    e.preventDefault();
    try {
      dispatch(setShowLoading({ show: true, message: "Salvando usuário" }));
      const request = await AxiosHelper.post("/user/saveUser", user);
      dispatch(setShowLoading({ show: false, message: "" }));
      history.push("/users");
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="mx-auto w-25">
      <form onSubmit={saveUser}>
        <div class="form-group text-white">
          <label for="email ">Fotos do usuário</label>
          <div className="d-flex">
            {user.photos.length < 1 ? (
              <div class="btn btn-default btn-file bg-secondary p-5 m-2 text-white">
                +{" "}
                <input
                  type="file"
                  onChange={async (e) => {
                    setUser({
                      ...user,
                      photos: [
                        ...user.photos,
                        await toBase64(e.target.files[0]),
                      ],
                    });
                  }}
                />
              </div>
            ) : (
              <div className="d-flex flex-column">
                <img
                  className="m-1"
                  src={user.photos[0]}
                  style={{ width: 150, height: 150 }}
                  alt=""
                />
                <span
                  onClick={(e) => {
                    setUser({
                      ...user,
                      photos: user.photos.filter((el, id) => id !== 0),
                    });
                  }}
                >
                  <i class="fas fa-times"></i> DELETAR
                </span>
              </div>
            )}
            {user.photos.length < 2 ? (
              <div class="btn btn-default btn-file bg-secondary p-5 m-2 text-white">
                +{" "}
                <input
                  type="file"
                  onChange={async (e) => {
                    setUser({
                      ...user,
                      photos: [
                        ...user.photos,
                        await toBase64(e.target.files[0]),
                      ],
                    });
                  }}
                />
              </div>
            ) : (
              <div className="d-flex flex-column">
                <img
                  className="m-1"
                  src={user.photos[1]}
                  style={{ width: 150, height: 150 }}
                  alt=""
                />
                <span
                  onClick={(e) => {
                    setUser({
                      ...user,
                      photos: user.photos.filter((el, id) => id !== 1),
                    });
                  }}
                >
                  <i class="fas fa-times"></i> DELETAR
                </span>
              </div>
            )}
            {user.photos.length < 3 ? (
              <div class="btn btn-default btn-file bg-secondary p-5 m-2 text-white">
                +{" "}
                <input
                  type="file"
                  onChange={async (e) => {
                    setUser({
                      ...user,
                      photos: [
                        ...user.photos,
                        await toBase64(e.target.files[0]),
                      ],
                    });
                  }}
                />
              </div>
            ) : (
              <div className="d-flex flex-column">
                <img
                  className="m-1"
                  src={user.photos[2]}
                  style={{ width: 150, height: 150 }}
                  alt=""
                />
                <span
                  onClick={(e) => {
                    setUser({
                      ...user,
                      photos: user.photos.filter((el, id) => id !== 2),
                    });
                  }}
                >
                  <i class="fas fa-times"></i> DELETAR
                </span>
              </div>
            )}
          </div>
        </div>
        <div class="form-group text-white">
          <label for="email ">Foto da biometria</label>
          <div className="d-flex">
            {!user.fingerprint ? (
              <div class="btn btn-default btn-file bg-secondary p-5 m-2 text-white">
                +{" "}
                <input
                  type="file"
                  onChange={async (e) => {
                    setUser({
                      ...user,
                      fingerprint: await toBase64(e.target.files[0]),
                    });
                  }}
                />
              </div>
            ) : (
              <div className="d-flex flex-column">
                <img
                  className="m-1"
                  src={user.fingerprint}
                  style={{ width: 150, height: 150 }}
                  alt=""
                />
                <span
                  onClick={(e) => {
                    setUser({
                      ...user,
                      fingerprint: "",
                    });
                  }}
                >
                  <i class="fas fa-times"></i> DELETAR
                </span>
              </div>
            )}
          </div>
        </div>
        <div class="form-group text-white">
          <label for="access">Acesso</label>
          <select
            class="form-control"
            onChange={(e) => {
              setUser({ ...user, access: e.target.value });
            }}
            id="access"
          >
            {userInfo.access === "MINISTRO" ||
            userInfo.access === "SECRETARIO" ||
            userInfo.access === "ASSESSOR" ? (
              <option value={"ASSESSOR"}>Assessor</option>
            ) : (
              <></>
            )}{" "}
            {userInfo.access === "MINISTRO" ||
            userInfo.access === "SECRETARIO" ? (
              <option value={"SECRETARIO"}>Secretário</option>
            ) : (
              <></>
            )}
            {userInfo.access === "MINISTRO" ? (
              <option value={"MINISTRO"}>Ministro</option>
            ) : (
              <></>
            )}
          </select>
        </div>
        <div class="form-group text-white">
          <label for="email">Email</label>
          <input
            type="email"
            class="form-control"
            id="email"
            aria-describedby="emailHelp"
            onChange={(e) => {
              setUser({ ...user, email: e.target.value });
            }}
          />
        </div>
        <div class="form-group text-white">
          <label for="password">Senha</label>
          <input
            type="password"
            class="form-control"
            id="password"
            onChange={(e) => {
              setUser({ ...user, password: e.target.value });
            }}
          />
        </div>
        <div class="form-group text-white">
          <label for="confirmPassword">Senha de Confirmação</label>
          <input
            type="password"
            class="form-control"
            id="confirmPassword"
            onChange={(e) => {
              setUser({ ...user, confirmPassword: e.target.value });
            }}
          />
        </div>
        <div className="d-flex justify-content-lg-between">
          <button className="btn btn-danger" type="button" onClick={(e) => {
            history.push('/users')
          }}>
            Voltar
          </button>
          <button
            type="submit"
            class="btn btn-primary"
            disabled={
              !user.email ||
              !user.password ||
              !user.confirmPassword ||
              !user.access ||
              !user.photos.length === 3 ||
              !user.fingerprint ||
              !user.password !== !user.confirmPassword
            }
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
