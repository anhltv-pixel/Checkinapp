import "../css/style.css";
function Button(props) {
  return (
    <input
      className="input-button"
      type={props.typeBtn}
      value={props.buttonName}
      onClick={props.handleClick}
    />
  );
}
export default Button;
