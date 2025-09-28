import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import Checkin from "./Pages/Checkin";
import "./css/style.css";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />}></Route>
      <Route path="checkin" element={<Checkin />}></Route>
      <Route path="*" element={<div>Not Found</div>} />
    </Routes>
  );
}

export default App;
