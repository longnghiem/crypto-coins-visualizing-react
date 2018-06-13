import React, {Component} from 'react';

//component SortingArrow
const SortingArrow = (props) =>{
    return (
      <div>
        <span className={"arrow up-arrow " + (props.sort_order == "asc" ? 'hidden' : '' )}></span>
        <span className={"arrow down-arrow" + (props.sort_order == "des" ? 'hidden' : '' )}></span>
      </div>
    )
}

//component table_head
const table_head = (props) => {

  let defineSortOrder = (type) => { //this func return 'asc', 'des', or ''
    let order = (props.sort_order === "asc") ? "asc" : "des"; //toggle between asc and des
    return (props.sorted_state  === type) ? order : "" //only the targeted th is given 'asc' or 'des'
  }

  return (
    <th onClick={() => props.sort(props.type)}>{props.type.replace(/_/g, ' ')}
      <SortingArrow sort_order={defineSortOrder(props.type)}/>
    </th>
  )
}

export default table_head;
