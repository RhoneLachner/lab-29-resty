import React, { Component } from 'react';
import styles from '../../containers/RestyHome.css';

export default class RequestView extends Component {
  render() {
    return (
      <>
        <div className={styles.requestView}>
          <div>
            <h2>Request Section. 
            URL input and radio buttons here with GO button</h2>       
          </div>

          <form>
            <input type="text" placeholder="http://api.url"></input>
            
          </form>
        </div>
      </>
    );
  }
}

