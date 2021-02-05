import React, { Component } from 'react';
import styles from './Header.css';

export default class Header extends Component {
  render() {
    return (
      <div className={styles.header}>
        <h1 className={styles.headerText}>RESTy</h1>
      </div>
    );
  }
}
