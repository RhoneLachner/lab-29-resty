import React, { Component } from 'react';
import Header from '../components/sectionView/Header';
import HistoryView from '../components/sectionView/HistoryView';
import RequestView from '../components/sectionView/RequestView';
import ResponseView from '../components/sectionView/ResponseView';

export default class RestyHome extends Component {
  render() {
    return (
      <div>
        <Header /> 
        <RequestView />
        <ResponseView />
        <HistoryView />
      </div>
    );
  }
}

