import React from 'react';

const Logout_Btn = ({ setUser }) => {
  const logOutHandler = (e) => {
    localStorage.removeItem('currentUser');
    setUser(null);
  };
  return (
    <div>
      <button onClick={logOutHandler}>Logout</button>
    </div>
  );
};

export default Logout_Btn;
