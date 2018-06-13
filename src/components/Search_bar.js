import React from 'react';

const search_bar = (props) => {

  return (
    <div className="search-bar">
      <input id='input-search' required type="text" onKeyUp={props.changed} />
        <label htmlFor="input-search">Insert coin name</label>
    </div>
  )
}

export default search_bar;
