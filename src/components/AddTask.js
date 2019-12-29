import React from "react";
import "./AddTask.css";

class AddTask extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: "",
      priority: null,
      color: ""
    };
    this.FormHandleSubmit = this.FormHandleSubmit.bind(this);
  }

  InputHandleChange = event => {
    this.setState({ term: event.target.value });
  };

  FormHandleSubmit() {
    if (!this.state.term || !this.state.priority || !this.state.color) {
      return;
    }
    var newValue = {
      value: this.state.term,
      priority: this.state.priority,
      done: false,
      id: null,
      color: this.state.color,
      pinState: false
    };
    this.props.addItem(newValue);
    this.setState({ term: "", priority: "" });
  }

  PriorityDropDownHandleSubmit = value => {
    this.setState({ priority: value });
  };
  ColorDropDownHandleSubmit = value => {
    this.setState({ color: value });
  };

  render() {
    return (
      <div className="header-container">
        <input
          type="text"
          value={this.state.term}
          onChange={this.InputHandleChange}
        />
        <div className="dropdown">
          <button className="dropbtn">Priority</button>
          <div className="dropdown-content">
            <div
              className="dropdown-content-item"
              onClick={() => this.PriorityDropDownHandleSubmit(1)}
            >
              Low
            </div>
            <div
              className="dropdown-content-item"
              onClick={() => this.PriorityDropDownHandleSubmit(2)}
            >
              Medium
            </div>
            <div
              className="dropdown-content-item"
              onClick={() => this.PriorityDropDownHandleSubmit(3)}
            >
              High
            </div>
          </div>
        </div>

        <div className="dropdown">
          <button className="dropbtn">Color</button>
          <div className="dropdown-content">
            <div
              className="dropdown-content-item"
              onClick={() => this.ColorDropDownHandleSubmit("red")}
            >
              Red
            </div>
            <div
              className="dropdown-content-item"
              onClick={() => this.ColorDropDownHandleSubmit("blue")}
            >
              Blue
            </div>
            <div
              className="dropdown-content-item"
              onClick={() => this.ColorDropDownHandleSubmit("yellow")}
            >
              yellow
            </div>
          </div>
        </div>

        <div className="header-add-item-button" onClick={this.FormHandleSubmit}>
          ADD ITEM
        </div>
      </div>
    );
  }
}
export default AddTask;
