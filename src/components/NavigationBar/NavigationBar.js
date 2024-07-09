import {useLocation, useNavigate} from 'react-router-dom';
import s from './NavigationBar.module.scss';
import {useEffect, useState} from 'react';

const NavigationBar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [isShrinkView, setIsShrinkView] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const navigateTo = (path) => {
    navigate(path);
  };

  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  const handleSidebarView = () => {
    setIsShrinkView(!isShrinkView);
  };

  const handleThemeChange = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle('dark');
  };

  useEffect(() => {
    console.log(isDarkMode);
  }, [isDarkMode]);

  return (
    <div className={`${s.sidebarContainer} ${isShrinkView ? s.shrink : ''}`}>
      <button
        className={s.sidebarViewButton}
        type="button"
        aria-label={isShrinkView ? 'Expand Sidebar' : 'Shrink Sidebar'}
        title={isShrinkView ? 'Expand' : 'Shrink'}
        onClick={handleSidebarView}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="feather feather-chevron-left"
        >
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>
      <div id={s.sidebarWrapper}>
        <div className={s.sidebarThemeContainer}>
          <label
            labelfor="theme-toggle"
            className={`${s.sidebarThemeLabel} ${isDarkMode ? s.switched : ''}`}
          >
            <input
              className={s.sidebarThemeInput}
              type="checkbox"
              id={s.themeToggle}
              onChange={handleThemeChange}
            />
            <div className={`${s.sidebarThemeType} ${s.light}`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className={s.sidebarListIcon}
              >
                <circle cx="12" cy="12" r="5" />
                <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
              </svg>
              <span className={s.sidebarThemeInputText}>Light</span>
            </div>
            <div className={`${s.sidebarThemeType} ${s.dark}`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className={s.sidebarListIcon}
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
              <span className={s.sidebarThemeInputText}>Dark</span>
            </div>
          </label>
        </div>
        <ul className={s.sidebarList}>
          <li
            className={`${s.sidebarListItem}  ${isActive('/')}`}
            onClick={() => navigateTo('/')}
          >
            <a href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className={s.sidebarListIcon}
              >
                <rect x="3" y="3" rx="2" ry="2" className={s.sidebarListIcon} />
                <path d="M3 9h18M9 21V9" />
              </svg>
              <span className={s.sidebarListItemText}>Main</span>
            </a>
          </li>
          <li
            className={`${s.sidebarListItem} ${isActive('/contact-us')}`}
            onClick={() => navigateTo('/contact-us')}
          >
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className={s.sidebarListIcon}
              >
                <polyline points="22 12 16 12 14 15 10 15 8 12 2 12" />
                <path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" />
              </svg>
              <span className={s.sidebarListItemText}>Contact Us</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavigationBar;
