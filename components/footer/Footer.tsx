import React from 'react';
import useFooter from './useFooter';
import style from './Footer.module.css';

export default function Footer() {
  const formattedDate = useFooter();
  return (
    <footer className={style.footerContainer}>
      <div>Designed & developed by Raghul R</div>
      <div>
        All rights reserved © <span className={style.formatedDate}>{formattedDate} </span>
      </div>
    </footer>
  );
}
