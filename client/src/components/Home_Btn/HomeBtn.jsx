import { useNavigate } from 'react-router-dom';
import logoGold from '../../images/logoGold.png';
import './home_btn_style.scss';

const Home_Btn = () => {
  const navigate = useNavigate();

  const goHome = () => {
    navigate('/');
  };
  return (
    <div className="homeBtn">
      <button id="home" onClick={goHome}>
        {/* <span role="img" aria-label="home_button">
          🏘️
        </span> */}
        <img src={logoGold} alt="Syntch Logo" style={{ color: 'white', width: '75px' }} />
      </button>
    </div>
  );
};

export default Home_Btn;
