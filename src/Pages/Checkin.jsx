import { useNavigate } from "react-router-dom";
import "../css/style.css";
import Realtime from "../Components/Realtime";

function Checkin() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user") || "{}");
  return (
    <div>
      <div className="Header">
        <div className="Header-userinfor">
          <img
            className="Header-userinfor_avatar"
            src={user.avatar}
            alt="avatar img"
          />
          <div className="Header-userinfor_email">
            <h2>Xin chào, {user.username}</h2>
            <p>{user.email}</p>
          </div>
        </div>
        <button
          onClick={() => {
            navigate("/login");
          }}
        >
          Đăng xuất
        </button>
      </div>
      <Realtime />
      <div className="Body">
        <div className="Body-checkin"></div>
        <div className="Body-checkout"></div>
        <div className="Body-history"></div>
      </div>
    </div>
  );
}

export default Checkin;
