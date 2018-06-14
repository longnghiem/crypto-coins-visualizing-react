import React from 'react';

const searchBar = (props) => {

  return (
    <div className="search-bar">
      <input id='input-search' required type="text" onKeyUp={props.changed} />
        <label htmlFor="input-search">Insert coin name</label>
    </div>
  )
}

export default searchBar;
