import React, { useState } from "react";

function RegistrationForm() {
  const [inputArray, setInputArray] = useState([]);

  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    phonenumber: "",
  });
  const changeHandler = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: [e.target.value],
    });
  };
  const { firstname, lastname, phonenumber } = formData;
  const submitHandler = (e) => {
    e.preventDefault();
    setInputArray([...inputArray, { firstname, lastname, phonenumber }]);
    console.log(formData);
    setFormData({ firstname, lastname, phonenumber });
  };
  const changeHandleData = () => {
    console.log("Objects store in Array", inputArray);
  };
  return (
    <div className="App">
      <h1>RegistrationForm</h1>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          autoComplete="off"
          name="firstname"
          value={firstname}
          onChange={changeHandler}
          placeholder="First Name"
        />
        <br></br>
        <input
          type="text"
          autoComplete="off"
          name="lastname"
          value={lastname}
          onChange={changeHandler}
          placeholder="Last Name"
        />
        <br></br>
        <input
          type="text"
          name="phonenumber"
          value={phonenumber}
          onChange={changeHandler}
          placeholder="Mobile Number"
        />
        <br></br>
        <input type="submit" name="submit" />
        <br></br>
        <input
          className="button"
          type="submit"
          name="check"
          onClick={changeHandleData}
        />
      </form>
      <table border={1} width="30%" cellPadding={10}>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Mobile Number</th>
        </tr>
        {inputArray.map((data, index) => {
          return (
            <tr key={index}>
              <td>{data.firstname}</td>
              <td>{data.lastname}</td>
              <td>{data.phonenumber}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );s
}

export default RegistrationForm;
