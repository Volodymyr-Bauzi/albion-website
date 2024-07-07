import NavigationBar from '../NavigationBar/NavigationBar';

import s from './Body.module.scss';

const Body = ({children}) => {
  return (
    <div className={s.body}>
      <div className={s.bodyNav}>
        <NavigationBar />
      </div>
      <div className={s.bodyMain}>{children}</div>
    </div>
  );
};

export default Body;
