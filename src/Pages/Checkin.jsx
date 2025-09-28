function Checkin() {
  user = JSON.parse(localStorage.getItem(user));
  return (
    <div>
      <div className="Header">
        <img src={avatar} alt="avatar img" />
        <h1>Xin chào, ${user.username}</h1>
        <p>{user.email}</p>
        <button>Đăng xuất</button>
      </div>
      <div className="Time"></div>
      <div className="Body">
        <div className="Body-checkin"></div>
        <div className="Body-checkout"></div>
        <div className="Body-history"></div>
      </div>
    </div>
  );
}

export default Checkin;
