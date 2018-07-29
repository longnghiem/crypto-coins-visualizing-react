import React, {Component} from 'react';

class TableHead extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSortedDesc: true,
      disabled: this.props.disabled
    }
  }

  componentDidUpdate(prevProps) {
    if(prevProps.disabled !== this.props.disabled) {
      this.setState({
        disabled: this.props.disabled
      })
    }
  }

  handleClick = () => {
    //toggle between the "true" and "false" values (showing up or down arrows)
   const nextOrder = this.state.disabled ? this.state.isSortedDesc : !this.state.isSortedDesc;
   //this.state.disabled cannot be modified here because its value is modified based on the condition in Table.js
   this.setState({
     isSortedDesc: nextOrder,
     // disabled: this.props.disabled
   })
   // console.log('disabled is: ', this.props.disabled);
   this.props.sort(this.props.type, this.state.isSortedDesc);
 }
render() {
  return (
    <th onClick={()=>this.handleClick()}>
      {this.props.type.replace(/_/g, ' ')}
      {/* once clicking on 1 specific header: only that header becomes not 'disabled', while all other headers become 'disabled'  */}
      {/* if a header is 'disabled': only 1 of the 2 arrows will be shown (toggle while clicking)   */}
      {!this.state.isSortedDesc && !this.state.disabled ?  null : <span className="arrow up-arrow "></span>}
      {this.state.isSortedDesc && !this.state.disabled ?  null : <span className="arrow down-arrow "></span>}
    </th>
  )
}
}

export default TableHead;
