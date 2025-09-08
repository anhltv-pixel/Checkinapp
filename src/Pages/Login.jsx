import "../css/style.css";
import Button from "../Components/Button";
import { useState } from "react";
function Login() {
  const [text, setText] = useState("");
  const [alerttxt, setAlerttxt] = useState("");
  const handleLogin = (e) => {
    e.preventDefault();
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!text) {
      setAlerttxt("Hãy nhập email");
      return;
    } else if (emailRegex.test(text)) {
      localStorage.setItem("email", text);
      setAlerttxt("");
      alert("Đăng nhập thành công!");
    } else {
      setAlerttxt("Email chưa đúng");
      return;
    }
  };
  const handleChange = (e) => {
    setText(e.target.value);
    if (!value) {
      setAlerttxt("");
    }
  };
  return (
    <form className="Loginform" onSubmit={handleLogin}>
      <h1>Check-in System</h1>
      <p className="Loginform-title__description">
        Đăng nhập bằng email để bắt đầu checkin/checkout
      </p>
      <p className="Loginform-input__ttl">Email</p>
      <input type="text" value={text} onChange={(e) => handleChange(e)} />
      <p className="Loginform-Alert__txt">{alerttxt}</p>
      <Button typeBtn={"submit"} buttonName={"Đăng nhập"} />
    </form>
  );
}
export default Login;
