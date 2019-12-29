import React from "react";
import "./TasksList.css";
import TaskItem from './TaskItem'

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    var pinnedItems = this.props.tasksList.map((item, index) => {
      if (!item.done && item.pinState )
        return (
          <TaskItem item ={item} index={index}/>
        );
      });
      var normalItems = this.props.tasksList.map((item, index) => {
        if (!item.done && !item.pinState )
        return (
          <TaskItem item ={item} index={index}/>
        );
      });
      var compeletedItem = this.props.tasksList.map((item, index) => {
        if (item.done)
        return (
          <TaskItem item ={item} index={index}/>
        );
    });
    return (
      <div className="task-list-container">
        <div>Pinned</div>
        {pinnedItems}
        <div>Unpinned</div>
        {normalItems}
        <div>Done</div>
        {compeletedItem}
      </div>
    );
  }
}
export default Header;