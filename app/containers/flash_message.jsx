import React, { Component } from 'react';
import { connect } from 'react-redux';
import { hideFlash } from '../actions/index';

function FlashMessage({ flashMessage, flashKey, flashVisible, hideFlash }) {
  
  if (flashMessage && flashVisible) {
    return (
      <div className={`alert alert-${flashKey}`}>
        <a href="#" className="close" onClick={hideFlash} aria-label="close">&times;</a>
        <strong>{flashMessage}</strong>
      </div>
    )
  }

  return <div></div>
}

function mapStateToProps(state) {
  return {
    flashKey: state.flashMessage.key,
    flashMessage: state.flashMessage.message,
    flashVisible: state.flashMessage.visible
  }
}

export default connect(mapStateToProps, { hideFlash })(FlashMessage)
