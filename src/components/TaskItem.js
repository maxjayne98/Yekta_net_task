import React from "react";
import "./TasksList.css";

class TaskItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pinCheck: this.props.item.pinState,
      doneCheck: this.props.item.done
    };
  }
  render() {
    return (
      <div style={{ backgroundColor: this.props.item.color }}>
        value:<span style={{marginRight:"3px"}}>{this.props.item.value}</span> 
        priority:<span style={{marginRight:"3px"}}>{this.props.item.priority}</span>
        id:<span style={{marginRight:"3px"}}>{this.props.item.id}</span>
        done:<span style={{marginRight:"3px",cursor:'pointer'}} onClick={this.props.makeDone(this.props.item.id)}>{this.props.item.done?"true":"false"}</span>
        pin:<span style={{marginRight:"3px",cursor:'pointer'}} onClick={this.props.makeDone(this.props.item.id)}>{this.props.item.pinState?"true":"false"}</span>
      </div>
    );
  }
}
export default TaskItem;
