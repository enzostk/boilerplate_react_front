import React, { useState } from "react";
import { useSetAtom } from "jotai";
import { loggedAtom } from "../../services/Atoms/user";
import { currentUserAtom } from '../../services/Atoms/currentUser';
import APIManager from '../../services/api';
import {Link} from "react-router-dom"

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const userID = useSetAtom(currentUserAtom);
    const logged = useSetAtom(loggedAtom);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await APIManager.loginUser(email, password);
        logged(true);
        userID(JSON.stringify(response.user));

    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" id="email" onChange={(e) => setEmail(e.target.value)} />
            <input type="text" id="password" onChange={(e) => setPassword(e.target.value)} />
            <button type="submit">Submit</button>
            <Link to ="/users/password">MDP</Link>
        </form>
    );
}


export default Login;






// const API_URL = "http://localhost:1337/auth/local/";

// function Login() {
//   const logged = useSetAtom(loggedAtom);

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const data = {
//       identifier: e.target.identifier.value,
//       password: e.target.password.value,
//     };

//     // console.log(typeof JSON.stringify(data));

//     fetch(API_URL, {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(data),
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         if (data.statusCode) {
//           alert("erreur de connexion");
//           return;
//         }

//         console.log(data);
//         Cookies.set("token", data.jwt);
//         // console.log(Cookies.get('token'));
//         logged(true);
//       })
//       .catch((error) => {
//         alert("erreur");
//         console.log(error.message);

//         logged(false);
//       });
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         Identifier : <input type="text" name="identifier" />
//         <br />
//         Password : <input type="password" name="password" />
//         <br />
//         <button
//           type="submit"
//         >
//           submit
//         </button>
//       </form>
//     </div>
//   );
// }

// export default Login;
