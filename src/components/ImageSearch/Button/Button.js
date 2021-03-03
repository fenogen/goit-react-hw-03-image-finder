import React from 'react';
// import PropTypes from 'prop-types'

import style from './Button.module.css';

function Button(props) {
  return (
    <div className={style.Button__container}>
      <button className={style.Button} type="button">
        Load more
      </button>
      {/* <button className={style.Button} type="button">
        Open
      </button> */}
    </div>
  );
}

Button.propTypes = {};

export default Button;
