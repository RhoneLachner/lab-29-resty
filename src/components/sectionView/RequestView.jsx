import React from 'react';
import PropTypes from 'prop-types';
import styles from '../../containers/RestyHome.css';

const RequestView = ({ radio, radioChange }) => (
  <>
    <div className={styles.requestView}>

      <form>
        <input type="text" placeholder="http://api.url.here"></input>
        <button>GO!</button>
        {/* RADIO BUTTONS HERE */}
        <div className={styles.radioButtons}>

          <input className={styles.radio} 
            type="radio" 
            name="method" 
            value="get" 
            onChange={radioChange}
            checked={radio === 'GET'}
          />
          <label htmlFor="get">GET</label>

          <input className={styles.radio} 
            type="radio" 
            name="method" 
            value="post" 
            onChange={radioChange}
            checked={radio === 'POST'}
          />
          <label htmlFor="get">POST</label>

          <input className={styles.radio} 
            type="radio" 
            name="method" 
            value="put" 
            onChange={radioChange}
            checked={radio === 'PUT'}
          />
          <label htmlFor="get">PUT</label>

          <input className={styles.radio} 
            type="radio" 
            name="method" 
            value="delete" 
            onChange={radioChange}
            checked={radio === 'DELETE'}
          />
          <label htmlFor="get">DELETE</label>

        </div>
      </form>
    </div>
  </>
);

RequestView.propTypes = {
  radio: PropTypes.string.isRequired,
  radioChange: PropTypes.func.isRequired
};

export default RequestView;

