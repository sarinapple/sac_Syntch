import "./register_style.scss";
import HomeBtn from "../Home_Btn/HomeBtn";
import { useRef, useState } from "react";
//REFS ARE USED WHEN YOU WANT TO GET DATA WUITHOUT CHANGING  THE Ui // USED AS STORAGE

const Register = () => {
  const rUsername = useRef();
  const rEmail = useRef();
  const rPassword = useRef();

  const [registered, setRegistered] = useState(false);

  const [error, setError] = useState("");

  const registerHandle = async (e) => {
    e.preventDefault();
    console.log("fired!");
    // ALWAYS USE CURRENT PROPERTY WITH USE REF
    // console.log(rUsername.current.value); // WORKS

    // PREPARE FORM DATA
    const uName = rUsername.current.value;
    const email = rEmail.current.value;
    const pw = rPassword.current.value;

    console.log(uName, email, pw);

    const creds = {
      username: uName,
      password: pw,
      email: email,
    };

    console.log(creds);

    const jsondata = JSON.stringify(creds);

    console.log(jsondata);

    const config = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: jsondata,
    };

    const response = await fetch("/api/v1/user/register", config);
    console.log(" response", response);
    console.log("response status", response.status);
    console.log("whatever ", response.body);

    const dataBody = await response.json();

    console.log("this is j res", dataBody);

    // whatever
    //   .then((response) => response.json())
    //   .then((result) => {
    //     console.log(result);
    //     setRegistered(true);
    //   });

    if (response.status === 500) {
      console.log(dataBody.message);
      setError(dataBody);
      if (dataBody.message.includes("duplicate")) {
        setError("this account already exists");
      } else {
        setError(dataBody.message);
      }

      console.log("end of func");
    } else {
      setError("registered successfully!");
    }
  };

  console.log("the eorr", error);

  return (
    <div>
      <form onSubmit={registerHandle} className="registerGroup">
        <label>Username</label>
        <input type="text" ref={rUsername} name="username" />
        <label>Email</label>
        <input type="email" ref={rEmail} />
        <label>Password</label>
        <input type="password" ref={rPassword} />
        <label>Profile</label>
        <input className="fileInput" type="file" />
        <button type="submit">Register to Play!</button>
        {error && <div>{error}</div>}
      </form>

      {/* {registered && <div> Registered Successfully!</div>} */}

      <HomeBtn />
    </div>
  );
};

export default Register;
