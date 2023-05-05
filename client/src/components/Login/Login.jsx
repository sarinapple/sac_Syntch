import "./login_style.scss";
import Home_Btn from "../Home_Btn/Home_Btn";
import { useState, useRef, useContext, useEffect } from "react";
import { LoginContext } from "../../LoginProvider.jsx";

const Login = (props) => {
  const [email, setEmail] = useState("");
  // const blaReb = useRef(INITIALIZE VALUE)
  const userNameRef = useRef(props.user ? props.user.username : null);
  const passWordRef = useRef(props.user ? props.user.password : null);

  // const emailHandler = (e) => {
  //   setEmail(e.target.value);
  // };
  // INSTEAD OF USE STATE WE USE CONTEXT AND PASS THE CREATED CONTEXT NAMED LoginContext
  const [loggedIn, setLoggedIn] = useContext(LoginContext);

  useEffect(() => {});

  const loginHandler = (e) => {
    e.preventDefault();

    // setUser({
    //   email: email
    // });
    const data = JSON.stringify({
      username: userNameRef.current.value,
      password: passWordRef.current.value,
    });
    console.log(data);
    const config = {
      method: "POST",
      body: JSON.stringify({
        username: userNameRef.current.value,
        password: passWordRef.current.value,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    };

    fetch("/api/v1/user/login", config)
      .then((result) => {
        result
          .json()
          .then((result) => {
            // console.log("print result from backend", result.user.email);
            if (result.success) {
              props.setUser(result.user);
              localStorage.setItem(
                "user",
                JSON.stringify({ user: result.user, token: result.token })
              );
            } else {
              alert("Login faild");
            }
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <div>
        Login Compone
        <form className="loginGroup" onSubmit={loginHandler}>
          <label>Username</label>
          {/* VALUE IS THE STATE */}
          <input type="text" ref={userNameRef} placeholder="username" />
          <label>Password</label>
          <input type="password" ref={passWordRef} placeholder="password" />
          <button>Login</button>
        </form>
        <Home_Btn />
      </div>
    </div>
  );
};

export default Login;
