import "../css/style.css";
import Button from "../Components/Button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [alerttxt, setAlerttxt] = useState("");
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const username = email.split("@")[0];
    const avatars = [
      "avatar_1.png",
      "avatar_2.png",
      "avatar_3.png",
      "avatar_4.png",
    ];
    const avatar = avatars[Math.floor(Math.random() * avatars.length)];

    if (!email) {
      setAlerttxt("Hãy nhập email");
      return;
    } else if (emailRegex.test(email)) {
      localStorage.setItem(
        "user",
        JSON.stringify({ email, username, avatar, history: [] })
      );
      setAlerttxt("");
      alert("Đăng nhập thành công!");
      navigate("/checkin");
    } else {
      setAlerttxt("Email chưa đúng");
      return;
    }
  };
  const handleChange = (e) => {
    const v = e.target.value;
    setEmail(v);
    if (!v) {
      setAlerttxt("");
    }
  };
  return (
    <form className="Loginform" onSubmit={handleLogin}>
      <h2>Check-in System</h2>
      <p className="Loginform-title__description">
        Đăng nhập bằng email để bắt đầu checkin/checkout
      </p>
      <p className="Loginform-input__ttl">Email</p>
      <input type="email" value={email} onChange={(e) => handleChange(e)} />
      <p className="Loginform-Alert__txt">{alerttxt}</p>
      <Button typeBtn={"submit"} buttonName={"Đăng nhập"} />
    </form>
  );
}
export default Login;
