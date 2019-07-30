import React from 'react';
import logo from './round-search-24px.svg'; // Tell Webpack this JS file uses this image
export function SearchIcon1() {
  // Import result is the URL of your image
  return <img src={logo} alt="Logo" />;
}