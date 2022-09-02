import React from "react";
import { useParams } from "react-router-dom";

const ResetPassword = () => {
  const token = useParams().token;
  console.log(token);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = e.target.password.value;
    const data2 = e.target.password_confirmation.value;
    console.log(data);

    fetch("http://localhost:3000/users/password",{
        method: "PATCH",
        headers: {"Content-Type":'application/json', "Accept":"application/json"},
        body: JSON.stringify({
          user: {
              reset_password_token: token,
              password: data,
              password_confirmation: data2
          }
      })
    })
    .then((response) => console.log("Coucou"))
      .catch((error) => {
        alert("erreur");
        console.log(error.message);
      });
  };

  return (
    <div>
      <h1>Change your password</h1>{" "}
      <form onSubmit={handleSubmit}>
        {" "}
        New password <input type="text" id="password" name="password" /> Confirm
        password
        <input
          type="text"
          id="password_confirmation"
          name="password_confirmation"
        />{" "}
        <button type="submit">Submit</button>{" "}
      </form>
    </div>
  );
};
export default ResetPassword;
