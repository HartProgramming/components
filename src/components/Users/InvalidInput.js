import invalidInputStyles from "./InvalidInput.module.css";
import Button from "../UI/Button";
import Card from "./Card";

function InvalidInput(props) {
  return (
    <div onClick={props.onConfirm}>
      <div onClick={props.onConfirm}>
        <Card className={invalidInputStyles.div}>
          <div className={invalidInputStyles.divHead}>
            <h2 className={invalidInputStyles.h2}>Invalid Input</h2>
          </div>
          <div className={invalidInputStyles.divData}>
            <p className={invalidInputStyles.p}>{props.paragraph}</p>
            <Button onClick={props.onConfirm}>Okay</Button>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default InvalidInput;
