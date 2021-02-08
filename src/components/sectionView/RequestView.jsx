import React from 'react';
import PropTypes from 'prop-types';
import styles from '../../containers/RestyHome.css';

const RequestView = ({ onClick, onChange, textBody, method, url }) => (
  <>
    <div className={styles.requestView}>

      <form>
        <input type="text" 
          name="url" 
          value={url} 
          onChange={onChange}
          placeholder="http://api.url.here" 
        />
        <button onClick={onClick} htmlFor="url">GO!</button>
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
  onClick: PropTypes.func.isRequired,
  textBody: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
};

export default RequestView;

