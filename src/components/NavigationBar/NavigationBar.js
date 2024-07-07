import {useLocation, useNavigate} from 'react-router-dom';
import s from './NavigationBar.module.scss';

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
      <div id={s.navBar}>
        {/* <input id={s.navToggle} /> */}
        <div id={s.navHeader}>
          <a id={s.navTitle}>
            A<i className={`${s.fab} ${s.faCodepen}`}></i>LBION
          </a>
          {/* <label for="nav-toggle">
            <span id={s.navToggleBurger}></span>
          </label> */}
          <hr />
        </div>
        <div id={s.navContent}>
          <div
            className={`${s.navButton} ${isActive('/')}`}
            onClick={() => navigateTo('/')}
          >
            <i className={`${s.fas} ${s.faPalette}`}></i>
            <span>Main</span>
          </div>
          <div
            className={`${s.navButton} ${isActive('/contact-us')}`}
            onClick={() => navigateTo('/contact-us')}
          >
            <i className={`${s.fas} ${s.faImages}`}></i>
            <span>Contact Us</span>
          </div>
          <div id={s.navContentHighlight}></div>
        </div>
      </div>
    </>
  );
};

export default NavigationBar;
