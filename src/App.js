import "./App.css";
import Login from "./views/Login";
import { Provider, useSelector } from "react-redux";
import Loading from "./components/Loading";
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes/Routes";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

function App() {
  const userInfo = useSelector((state) => state.userInfo);
  return (
    <BrowserRouter>
      <div
        className="bg-success d-flex flex-column"
        style={{ minHeight: "100vh" }}
      >
        {userInfo?._id ? <Navbar /> : <></>}
        <div className="d-flex flex-grow-1">
          {userInfo?._id ? <Sidebar /> : <></>}
          <div className="w-100">
            <Routes />
          </div>
        </div>
        <Loading />
      </div>
    </BrowserRouter>
  );
}

export default App;
