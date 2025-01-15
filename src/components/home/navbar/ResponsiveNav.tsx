'use client';
import React, { useState } from 'react';
import Nav from './Navbar';
import Mobilenav from './Mobilenav';

const ResponsiveNav = () => {
  const [showNav, setShownav] = useState(false);

  const handleNavShow = () => {
    setShownav(true);
  };

  const handleNavHide = () => {
    setShownav(false);
  };

  return (
    <div>
      <Nav openNav={handleNavShow} />
      <Mobilenav showNav={showNav} closeNav={handleNavHide} />
    </div>
  );
};

export default ResponsiveNav;
