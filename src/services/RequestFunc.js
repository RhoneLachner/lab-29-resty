import React, { Component } from 'react';

export default class RequestFunc extends Component {
  
  state = {
    onClick: false,
    onChange: false,
    textBody: '',
    method: '',
    url: ''
  }

handleChange = (e) => {
  e.preventDefault();
  this.setState({ [e.target.name]: e.target.value });
} 

handleClick = (e) => {
  e.preventDefault();
  this.setState({ click:true });
}

render() {
  return (
    <div></div>

  );
  
}
}
