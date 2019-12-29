import React from "react";
import "./TasksList.css";
import TaskItem from "./TaskItem";

class AddTask extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    var pinnedItems = this.props.tasksList.map((item, index) => {
      if (!item.done && item.pinState)
        return (
          <TaskItem
            makeDone={this.props.makeDone}
            makePin={this.props.makePin}
            deletTask={this.props.deletTask}
            item={item}
            key={item.id}
          />
        );
    });
    var normalItems = this.props.tasksList.map((item, index) => {
      if (!item.done && !item.pinState)
        return (
          <TaskItem
            makeDone={this.props.makeDone}
            makePin={this.props.makePin}
            deletTask={this.props.deletTask}
            item={item}
            key={item.id}
          />
        );
    });
    var compeletedItem = this.props.tasksList.map((item, index) => {
      if (item.done)
        return (
          <TaskItem
            makeDone={this.props.makeDone}
            makePin={this.props.makePin}
            deletTask={this.props.deletTask}
            item={item}
            key={item.id}
          />
        );
    });
    return (
      <div className="task-list-container">
        <div className="task-list-tittle">Pinned</div>
        {pinnedItems}
        <div className="task-list-tittle">Unpinned</div>
        {normalItems}
        <div className="task-list-tittle">Done</div>
        {compeletedItem}
      </div>
    );
  }
}
export default AddTask;
