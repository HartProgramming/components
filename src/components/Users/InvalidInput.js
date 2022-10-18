import invalidInputStyles from "./InvalidInput.module.css";
import Button from "../UI/Button";

function InvalidInput(props) {
  return (
    <div className={invalidInputStyles.div}>
      <div className={invalidInputStyles.divHead}>
        <h2 className={invalidInputStyles.h2}>Invalid Input</h2>
      </div>
      <div className={invalidInputStyles.divData}>
        <p className={invalidInputStyles.p}>{props.paragraph}</p>
        <Button>Okay</Button>
      </div>
    </div>
  );
}

export default InvalidInput;
