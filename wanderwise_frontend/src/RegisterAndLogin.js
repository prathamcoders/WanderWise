// import React, { useState } from "react";
// import { database } from "./FirebaseConfig";
// import {
//     createUserWithEmailAndPassword,
//     signInWithEmailAndPassword,
// } from "firebase/auth";
// import { useNavigate } from "react-router-dom";

// function RegisterAndLogin() {
//     const [login, setLogin] = useState(false);

//     const history = useNavigate();

//     const handleSubmit = (e, type) => {
//         e.preventDefault();
//         const email = e.target.email.value;
//         const password = e.target.password.value;
//         if (type == "signup") {
//             createUserWithEmailAndPassword(database, email, password)
//                 .then((data) => {
//                     console.log(data, "authData");
//                     history("/home");
//                 })
//                 .catch((err) => {
//                     alert(err.code);
//                     setLogin(true);
//                 });
//         } else {
//             signInWithEmailAndPassword(database, email, password)
//                 .then((data) => {
//                     console.log(data, "authData");
//                     history("/home");
//                 })
//                 .catch((err) => {
//                     alert(err.code);
//                 });
//         }
//     };

//     const handleReset = () => {
//         history("/reset");
//     };
//     return (
//         <div className="App">
//             {/* Registration and login Screen */}
//             <div className="row">
//                 <div
//                     className={login == false ? "activeColor" : "pointer"}
//                     onClick={() => setLogin(false)}
//                 >
//                     SignUp
//                 </div>
//                 <div
//                     className={login == true ? "activeColor" : "pointer"}
//                     onClick={() => setLogin(true)}
//                 >
//                     SignIn
//                 </div>
//             </div>
//             <h1>{login ? "SignIn" : "SignUp"}</h1>
//             <form
//                 onSubmit={(e) => handleSubmit(e, login ? "signin" : "signup")}
//             >
//                 <input
//                     name="email"
//                     placeholder="Email"
//                 />
//                 <br />
//                 <input
//                     name="password"
//                     type="text"
//                     placeholder="Password"
//                 />
//                 <br />
//                 <p onClick={handleReset}>Forgot Password?</p>
//                 <br />
//                 <button>{login ? "SignIn" : "SignUp"}</button>
//             </form>
//         </div>
//     );
// }
// export default RegisterAndLogin;

import React, { useState } from "react";
import { database } from "./FirebaseConfig";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";

function RegisterAndLogin() {
    const [login, setLogin] = useState(false);

    const history = useNavigate();

    const handleSubmit = (e, type) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        if (type === "signup") {
            createUserWithEmailAndPassword(database, email, password)
                .then((data) => {
                    console.log(data, "authData");
                    history("/home");
                })
                .catch((err) => {
                    alert(err.code);
                    setLogin(true);
                });
        } else {
            signInWithEmailAndPassword(database, email, password)
                .then((data) => {
                    console.log(data, "authData");
                    history("/home");
                })
                .catch((err) => {
                    alert(err.code);
                });
        }
    };

    const handleReset = () => {
        history("/reset");
    };

    return (
        <div className="flex flex-col items-center h-screen">
            {/* Registration and login Screen */}
            <div className="flex">
                <div
                    className={`py-2 px-4 cursor-pointer ${
                        login ? "" : "bg-blue-500 text-white"
                    }`}
                    onClick={() => setLogin(false)}
                >
                    SignUp
                </div>
                <div
                    className={`py-2 px-4 cursor-pointer ${
                        login ? "bg-blue-500 text-white" : ""
                    }`}
                    onClick={() => setLogin(true)}
                >
                    SignIn
                </div>
            </div>
            <h1 className="text-3xl font-bold mt-4 mb-6">
                {login ? "SignIn" : "SignUp"}
            </h1>
            <form
                className="flex flex-col items-center"
                onSubmit={(e) => handleSubmit(e, login ? "signin" : "signup")}
            >
                <input
                    className="border border-gray-300 rounded-lg px-4 py-2 mb-4 focus:outline-none focus:border-blue-500"
                    name="email"
                    placeholder="Email"
                    type="email"
                />
                <input
                    className="border border-gray-300 rounded-lg px-4 py-2 mb-4 focus:outline-none focus:border-blue-500"
                    name="password"
                    type="password"
                    placeholder="Password"
                />
                <p
                    className="text-blue-500 cursor-pointer"
                    onClick={handleReset}
                >
                    Forgot Password?
                </p>
                <button
                    className="bg-blue-500 text-white py-2 px-6 rounded-lg mt-4 hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                    type="submit"
                >
                    {login ? "SignIn" : "SignUp"}
                </button>
            </form>
        </div>
    );
}

export default RegisterAndLogin;
