import React, { Component } from 'react';
import HistoryItem from './HistoryItem';

export default class HistoryView extends Component {
  render() {
    return (
      <div>
        <h2>History Section with List of History Items</h2>    
        <HistoryItem />
      </div>
    );
  }
}

