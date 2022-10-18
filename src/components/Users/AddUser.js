import userStyles from "./AddUser.module.css";
import { useState } from "react";
import Button from "../UI/Button";
import InvalidInput from "./InvalidInput";
import Card from "./Card";

function AddUser(props) {
  const [user, setUser] = useState("Edward");
  const [age, setAge] = useState("30");

  const changeUserHandler = (e) => {
    console.log(e.target.value);
    setUser(e.target.value);
  };

  const changeAgeHandler = (e) => {
    console.log(e.target.value);
    setAge(e.target.value);
  };

  const addUserHandler = (e) => {
    e.preventDefault();
    console.log(user);
    console.log(age);
    setUser("");
    setAge("");

    const dataObj = {
      user: user,
      age: age,
    };
    console.log(dataObj);
    if (user.trim().length === 0 && age.trim().length === 0) {
      console.log(dataObj);
      return (
        <div>
          <InvalidInput paragraph={"Invalid Input"}></InvalidInput>
        </div>
      );
    } else if (age < 0) {
      console.log("hi");
      return (
        <div>
          <InvalidInput
            paragraph={"Please enter a valid age greater than 0"}
          ></InvalidInput>
        </div>
      );
    }

    props.saveData(dataObj);
  };

  return (
    <Card className={userStyles.form}>
      <form className={userStyles.form} onSubmit={addUserHandler}>
        <label htmlFor="user" className={userStyles.label}>
          Username
        </label>
        <input
          id="user"
          onChange={changeUserHandler}
          value={user}
          className={userStyles.input}
          type="text"
        />
        <label htmlFor="age" className={userStyles.label}>
          Age
        </label>
        <input
          id="age"
          onChange={changeAgeHandler}
          type="number"
          value={age}
          className={userStyles.input}
        />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
}

export default AddUser;
