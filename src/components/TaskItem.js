import React from "react";
import "./TaskItem.css";
import deleteLogo from "../images/delete.svg";

class TaskItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  PrioritySwitchRendering() {
    if (this.props.item.priority === 1) return "Low";
    else if (this.props.item.priority === 2) return "Medium";
    else if (this.props.item.priority === 3) return "High";
    else return "priority";
  }
  CheckBoxSwitchRendering(value) {
    if (value) return <div className="check-box true-check-box"></div>;
    return <div className="check-box"></div>;
  }
  render() {
    return (
      <div
        className="task-item-container"
        style={{ backgroundColor: this.props.item.color }}
      >
        <span className="task-item-value">{this.props.item.value}</span>
        <span className="task-item-priority">
          {this.PrioritySwitchRendering()}
        </span>
        <div
          className="task-item-check-box-container"
          onClick={() => this.props.makeDone(this.props.item.id)}
        >
          Done{this.CheckBoxSwitchRendering(this.props.item.done)}
        </div>
        <div
          className={
            this.props.item.done
              ? "not-visible-check-box task-item-check-box-container"
              : "task-item-check-box-container"
          }
          onClick={() => this.props.makePin(this.props.item.id)}
        >
          Pin{this.CheckBoxSwitchRendering(this.props.item.pinState)}
        </div>
        <img
          src={deleteLogo}
          alt="delete-svg"
          className="task-item-delet-pic"
          onClick={() => this.props.deletTask(this.props.item.id)}
        />
      </div>
    );
  }
}
export default TaskItem;
