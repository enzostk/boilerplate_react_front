import React from "react";

const ForgotPassword = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = e.target.email.value
        console.log(data)
    

    fetch("http://localhost:3000/users/password",{
        method: "POST",
        headers: {"Content-Type":'application/json', "Accept":"application/json"},
        body: JSON.stringify({"user":{email:data}})
    })
    .then((response) => response.json())
    .then((response) => console.log(response))
      .catch((error) => {
        alert("erreur");
        console.log(error.message);
      });
}

  return (
    <div>
      <h1>Forgot your password?</h1>{" "}
      <form onSubmit={handleSubmit}>
        {" "}
        <input
          type="text"
          id="email"
          name="email"
        />{" "}
        <button type="submit">Submit</button>{" "}
      </form>
    </div>
  );
};

export default ForgotPassword;
