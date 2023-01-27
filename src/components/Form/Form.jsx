import React from "react";
import Styles from "./Form.module.css";
import validation from "./validation.js";

const Form = ({ login }) => {
  const [userData, setUserData] = React.useState({
    username: "",
    password: "",
  });
  const [errors, setErrors] = React.useState({});

  const handleInputChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });

    setErrors(
      validation({
        ...userData,
        [e.target.name]: e.target.value,
      })
    );
  };

  const handleSubmit = () => {
    login(userData);
  };

  return (
    <div className={Styles.containerForm}>
      <label htmlFor="username">Username: </label>
      <input
        type="text"
        name="username"
        value={userData.username}
        onChange={handleInputChange}
        className={errors.username && Styles.warning}
      />

      <label htmlFor="password">Password</label>
      <input
        type="text"
        name="password"
        value={userData.password}
        onChange={handleInputChange}
        className={errors.password && Styles.warning}
      ></input>

      <button onClick={handleSubmit}>Login</button>
    </div>
  );
};

export default Form;
