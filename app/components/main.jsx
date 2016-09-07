import React, { Component } from 'react';
import FlashMessage from '../containers/flash_message.jsx';

function Main({children, flashMessage, flashKey}) {

  return (
    <div className="container">
      <FlashMessage />
      { children }
    </div>
  )
}


export default Main
