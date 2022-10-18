import userStyles from "../Users/AddUser.module.css";

function Button(props) {
  return (
    <div>
      <button
        onClick={props.onClick}
        className={userStyles.button}
        type={props.type || "button"}
      >
        {props.children}
      </button>
    </div>
  );
}

export default Button;
