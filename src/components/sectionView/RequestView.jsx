import React from 'react';
import PropTypes from 'prop-types';
import styles from '../../containers/RestyHome.css';

const RequestView = ({ onChange, textBody, method }) => (
  <>
    <div className={styles.requestView}>

      <form>
        <input type="text" name="url" placeholder="http://api.url.here"></input>
        <button>GO!</button>
        {/* RADIO BUTTONS HERE */}
        <div className={styles.radioButtons}>

          <input className={styles.radio} 
            type="radio" 
            name="method" 
            value="get" 
            onChange={onChange}
            checked={method === 'GET'}
          />
          <label htmlFor="get">GET</label>

          <input className={styles.radio} 
            type="radio" 
            name="method" 
            value="post" 
            onChange={onChange}
            checked={method === 'POST'}
          />
          <label htmlFor="get">POST</label>

          <input className={styles.radio} 
            type="radio" 
            name="method" 
            value="put" 
            onChange={onChange}
            checked={method === 'PUT'}
          />
          <label htmlFor="get">PUT</label>

          <input className={styles.radio} 
            type="radio" 
            name="method" 
            value="delete" 
            onChange={onChange}
            checked={method === 'DELETE'}
          />
          <label htmlFor="get">DELETE</label>

        </div>
        <textarea
          placeholder="JSON Here"
          value={textBody}
          onChange={onChange}
        ></textarea>

      </form>
    </div>
  </>
);

RequestView.propTypes = {
  method: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  textBody: PropTypes.string.isRequired,
};

export default RequestView;

