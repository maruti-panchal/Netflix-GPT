// import React, { useState, useRef } from "react";
// import Header from "./Header";

// import { validate } from "../utils/validate";
// import {
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
//   updateProfile,
// } from "firebase/auth";
// import { auth } from "../utils/firebase";
// import { useNavigate } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { addUser } from "../utils/userSlice";
// import { USER_AVTAR } from "../utils/constatnts";

// const Login = () => {
//   const [errorMessage, setErrorMessage] = useState(null);
//   const [isSignInForm, setIsSignInForm] = useState(true);
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const name = useRef(null);
//   const email = useRef(null);
//   const password = useRef(null);

//   const toggleSignInForm = () => {
//     setIsSignInForm(!isSignInForm);
//   };

//   const handleButtonClick = (e) => {
//     e.preventDefault();
//     const message = validate(email.current.value, password.current.value);
//     setErrorMessage(message);
//     if (message) return;
//     if (isSignInForm) {
//       // Sign in
//       signInWithEmailAndPassword(
//         auth,
//         email.current.value,
//         password.current.value
//       )
//         .then((userCredential) => {
//           const user = userCredential.user;
//           console.log(user);
//         })
//         .catch((error) => {
//           const errorCode = error.code;
//           const errorMessage = error.message;
//           setErrorMessage(errorCode + "-" + errorMessage);
//         });
//     } else {
//       // sign up
//       createUserWithEmailAndPassword(
//         auth,
//         email.current.value,
//         password.current.value
//       )
//         .then((userCredential) => {
//           const user = userCredential.user;
//           updateProfile(user, {
//             displayName: name.current.value,
//             photoURL: USER_AVTAR ,
//           })
//             .then(() => {
//               const { uid, email, displayName, photoURL } = auth.currentUser;
//               dispatch(
//                 addUser({
//                   uid: uid,
//                   email: email,
//                   displayName: displayName,
//                   photoURL: photoURL,
//                 })
//               );
//             })
//             .catch((error) => {
//               setErrorMessage(error.message);
//             });
//         })
//         .catch((error) => {
//           const errorCode = error.code;
//           const errorMessage = error.message;
//           setErrorMessage(errorCode + "-" + errorMessage);
//         });
//     }
//   };
//   return (
//     <div>
//       <Header />
//       <div className="absolute ">
//         <img src="/img/bg.jpg"></img>
//       </div>
//       <form className="w-full md:w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
//         <h1 className="font-bold text-3xl py-4">
//           {isSignInForm ? "Sign In" : "Sign Up"}
//         </h1>
//         <input
//           ref={email}
//           type="text"
//           placeholder="Email"
//           className="p-4 my-4 w-full bg-gray-700"
//         ></input>
//         {!isSignInForm && (
//           <input
//             ref={name}
//             type="text"
//             placeholder="Name"
//             className="p-4 my-4 w-full bg-gray-700"
//           ></input>
//         )}
//         <input
//           ref={password}
//           type="password"
//           placeholder="Password"
//           className="p-4 my-4 w-full bg-gray-700"
//         ></input>
//         <p className="text-red-500 font-bold text-lg py-2">{errorMessage}</p>
//         <button
//           className="p-4 my-6 bg-red-700 w-full rounded-lg"
//           onClick={handleButtonClick}
//         >
//           {isSignInForm ? "Sign In" : "Sign Up"}
//         </button>
//         <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
//           {isSignInForm
//             ? " New to Netflix ? Sign Up Now"
//             : "Already Registered ? Sing In  "}
//         </p>
//       </form>
//     </div>
//   );
// };

// export default Login;

import React, { useState, useRef } from "react";
import Header from "./Header";
import { validate } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { USER_AVTAR } from "../utils/constatnts";

const Login = () => {
  const [errorMessage, setErrorMessage] = useState(null);
  const [isSignInForm, setIsSignInForm] = useState(true);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleButtonClick = (e) => {
    e.preventDefault();
    const message = validate(email.current.value, password.current.value);
    setErrorMessage(message);
    if (message) return;
    if (isSignInForm) {
      // Sign in
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      // sign up
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: USER_AVTAR,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };

  return (
    <div
      className="min-h-screen flex flex-col justify-between bg-cover bg-center"
      style={{ backgroundImage: "url('/img/bg.jpg')" }}
    >
      <Header />
      <div className="flex flex-col items-center justify-center h-full">
        <form className="w-full md:w-3/12 p-12 bg-black text-white rounded-lg bg-opacity-80 mt-40">
          <h1 className="font-bold text-3xl py-4">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>
          <input
            ref={email}
            type="text"
            placeholder="Email"
            className="p-4 my-4 w-full bg-gray-700"
          ></input>
          {!isSignInForm && (
            <input
              ref={name}
              type="text"
              placeholder="Name"
              className="p-4 my-4 w-full bg-gray-700"
            ></input>
          )}
          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="p-4 my-4 w-full bg-gray-700"
          ></input>
          <p className="text-red-500 font-bold text-lg py-2">{errorMessage}</p>
          <button
            className="p-4 my-6 bg-red-700 w-full rounded-lg"
            onClick={handleButtonClick}
          >
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>
          <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
            {isSignInForm
              ? " New to Netflix ? Sign Up Now"
              : "Already Registered ? Sing In"}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
