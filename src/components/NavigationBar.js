import {useLocation, useNavigate} from 'react-router-dom';

const NavigationBar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const navigateTo = (path) => {
    navigate(path);
  };

  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <>
      <div className="bottom-navbar">
        <div className="navbar_btn">
          <button onClick={() => navigateTo('/')} className={isActive('/')}>
            <div className={`bottom-nav-img main-img ${isActive('/')}`}></div>
            <span>Главная</span>
          </button>
        </div>
        <div className="navbar_btn">
          <button
            onClick={() => navigateTo('/contact-us')}
            className={isActive('/contact-us')}
          >
            <div
              className={`bottom-nav-img rating-img ${isActive('/rating')}`}
            ></div>
            <span>Рейтинг</span>
          </button>
        </div>
      </div>
      {/* <div className="bottom-navbar__filter"></div> */}
    </>
  );
};

export default NavigationBar;
