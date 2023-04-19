import './register_style.scss';
import Home_Btn from '../Home_Btn/Home_Btn';

const Register = () => {
  return (
    <div>
      <div className="registerGroup">
        Register Compone
        <label>Username</label>
        <input type="text" name="username" />
        <label>Email</label>
        <input type="email" />
        <label>Password</label>
        <input type="password" />
        <label>Profile</label>
        <input className="fileInput" type="file" />
      </div>

      <Home_Btn />
    </div>
  );
};

export default Register;
