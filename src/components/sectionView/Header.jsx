import React, { Component } from 'react';
import styles from '../../containers/RestyHome.css';

export default class Header extends Component {
  render() {
    return (
      <>
        <div className={styles.header}>
          <h1 className={styles.headerText}>RESTy</h1>
        </div>
        <ul className={styles.redHeader}>
          <li>
         Home
          </li>
          <li>
         History
          </li>
          <li>
         Help
          </li>
        </ul>
      </>
    );
  }
}
