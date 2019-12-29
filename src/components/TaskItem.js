import React from "react";
import "./TasksList.css";

class TaskItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div  style={{ backgroundColor: this.props.item.color }}>
        {this.props.item.value} {this.props.item.priority}
        <input type="checkbox" name="vehicle2" value="Car" />
        done
        <input type="checkbox" name="vehicle2" value="Car" />
        pin
      </div>
    );
  }
}
export default TaskItem;
