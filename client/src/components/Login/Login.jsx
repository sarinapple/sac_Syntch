import "./login_style.scss";
import Home_Btn from "../Home_Btn/HomeBtn";
import { useState, useContext } from "react";
import { LoginContext } from "../../LoginProvider.jsx";
import { redirect, useNavigate } from "react-router-dom";
// import { withRouter } from "react-router";

const Login = (props) => {
  console.log("props", props);
  const [email, setEmail] = useState("");
  // const blaReb = useRef(INITIALIZE VALUE)
  // const userNameRef = useRef(props.user ? props.user.username : null);
  // const passWordRef = useRef(props.user ? props.user.password : null);

  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  // const emailHandler = (e) => {
  //   setEmail(e.target.value);
  // };
  // INSTEAD OF USE STATE WE USE CONTEXT AND PASS THE CREATED CONTEXT NAMED LoginContext

  const { loggedIn, setLoggedIn } = useContext(LoginContext);

  const navigate = useNavigate();

  const loginHandler = (e) => {
    e.preventDefault();

    // setUser({
    //   email: email
    // });
    const data = JSON.stringify({
      // username: userNameRef.current.value,
      // password: passWordRef.current.value,

      username,
      password,
    });
    console.log(data);
    const config = {
      method: "POST",
      body: data,
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
              console.log("what am i checking");
              // <redirect push to="/home" />;
              navigate("/");
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
          <input
            type="text"
            onChange={(e) => setUserName(e.target.value)}
            placeholder="username"
          />
          <label>Password</label>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="password"
          />
          <button type="submit">Login</button>
        </form>
        <Home_Btn />
      </div>
    </div>
  );
};

// export default withRouter(Login);
export default Login;
