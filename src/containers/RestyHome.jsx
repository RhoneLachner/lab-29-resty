import React, { Component } from 'react';
// import { RequestFunc } from '../services/RequestFunc';
import Header from '../components/sectionView/Header';
// import HistoryView from '../components/sectionView/HistoryView';
import RequestView from '../components/sectionView/RequestView';
// import ResponseView from '../components/sectionView/ResponseView';

export default class RestyHome extends Component {
  state = {
    onClick: false,
    onChange: false,
    textBody: '',
    method: '',
    url: ''
  }

  handleChange = (e) => {
    e.preventDefault();
    
    this.setState({ [e.target.url]: e.target.value });
  } 

  handleClick = (e) => {
    e.preventDefault();
    this.setState({ click:true });
  }

  render() {
    const { url, textBody, method } = this.state;

    return (
      <div>
        <Header /> 
        <RequestView 
          onClick={this.handleClick}
          onChange={this.handleChange}
          url={url}
          textBody={textBody}
          method={method}
        />
        {/* <ResponseView />
        <HistoryView /> */}
      </div>
    );
  }
}

