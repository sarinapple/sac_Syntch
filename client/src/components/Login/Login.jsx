import "./login_style.scss";
import Home_Btn from "../Home_Btn/Home_Btn";
import { useState } from "react";

const Login = ({ setUser }) => {
  const [email, setEmail] = useState("");

  const emailHandler = (e) => {
    setEmail(e.target.value);
  };

  const loginHandler = (e) => {
    e.preventDefault();

    // setUser({
    //   email: email
    // });
    const config = {
      method: "POST",
      body: JSON.stringify(email),
      headers: {
        "Content-Type": "application/json",
      },
    };

    fetch("/api/v1/user/login", config).then((result) => {
      result
        .json()
        .then((result) => {
          if (result.success) {
            setUser(result.user);
          }
        })
        .catch((error) => {
          console.log(error);
        });
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
            type="email"
            onChange={emailHandler}
            value={email}
            placeholder="email"
          />
          <label>Password</label>
          <input type="password" />
          <button>Login</button>
        </form>
      </div>

      <Home_Btn />
    </div>
  );
};

export default Login;
