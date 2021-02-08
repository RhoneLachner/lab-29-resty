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

            {/* RADIO BUTTONS HERE */}
            <div className={styles.radioButtons}>

              <input type="radio" name="method" value="get" />
              <label htmlFor="get">GET</label>

              <input type="radio" name="method" value="post" />
              <label htmlFor="get">POST</label>

              <input type="radio" name="method" value="put" />
              <label htmlFor="get">PUT</label>

              <input type="radio" name="method" value="delete" />
              <label htmlFor="get">DELETE</label>

            </div>

          </form>
        </div>
      </>
    );
  }
}

