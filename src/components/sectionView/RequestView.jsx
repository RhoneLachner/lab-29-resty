import React, { Component } from 'react';
import styles from '../../containers/RestyHome.css';

export default class RequestView extends Component {
  render() {
    return (
      <>
        <div className={styles.requestView}>
         

          <form>
            <input type="text" placeholder="http://api.url.here"></input>
            <button>GO!</button>
          </form>
        </div>
      </>
    );
  }
}

