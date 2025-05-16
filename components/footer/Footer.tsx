import React from 'react';
import useFooter from './useFooter';

export default function Footer() {
  const formattedDate = useFooter();
  return (
    <footer className="flex flex-col items-center justify-center w-full h-24 text-white italic ">
      <div className="flex items-center justify-center gap-2">
        Designed & developed by Raghul ~ <span className="text-sm">{formattedDate} </span>
      </div>
      <div>All rights reserved ©</div>
    </footer>
  );
}
