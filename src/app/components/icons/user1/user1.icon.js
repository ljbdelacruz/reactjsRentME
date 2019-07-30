import React from 'react';
import logo from './round-supervised_user_circle-24px.svg'; // Tell Webpack this JS file uses this image
export function UserIcon1() {
  // Import result is the URL of your image
  return <img src={logo} alt="Logo" />;
}