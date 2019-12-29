import React from "react";
import "./TasksList.css";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    
  }
  render() {
    var normalItems = this.props.tasksList.map((item, index) => {
        if(!item.done)
            return (
            <div key={index} style={{backgroundColor:item.color}}>{item.value}  {item.priority} </div>
            );
      });
    var compeletedItem = this.props.tasksList.map((item, index) => {
        if(item.done)
            return (
            <div key={index} style={{backgroundColor:item.color}}>{item.value}  {item.priority} </div>
            );
      });
    return (
      <div>
        {normalItems}
        {compeletedItem}
      </div>
    );
  }
}
export default Header;
