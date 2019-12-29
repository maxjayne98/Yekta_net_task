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
    this.formHandleSubmit = this.formHandleSubmit.bind(this);
  }

  inputHandleChange = event => {
    this.setState({ term: event.target.value });
  };

  formHandleSubmit() {
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
    this.setState({ term: "", priority: "",color:"" });
  }

  priorityDropDownHandleSubmit = value => {
    this.setState({ priority: value });
  };
  colorDropDownHandleSubmit = value => {
    this.setState({ color: value });
  };

  priorityDropDownSwitchRendering() {
    if (this.state.priority === 1) return "Low";
    else if (this.state.priority === 2) return "Medium";
    else if (this.state.priority === 3) return "High";
    else return "Priority";
  }
  colorSwitchRendering() {
    if (this.state.color === "#FF677D") return "Red";
    else if (this.state.color === "#6CA0D1") return "Blue";
    else if (this.state.color === "#FFEFEE") return "Yellow";
    else return "Color";
  }
  render() {
    return (
      <div className="add-task-container">
        <input
          type="text"
          value={this.state.term}
          onChange={this.inputHandleChange}
        />
        <div className="dropdown">
          <button className="dropbtn">
            {this.priorityDropDownSwitchRendering()}
          </button>
          <div className="dropdown-content">
            <div
              className="dropdown-content-item"
              onClick={() => this.priorityDropDownHandleSubmit(1)}
            >
              Low
            </div>
            <div
              className="dropdown-content-item"
              onClick={() => this.priorityDropDownHandleSubmit(2)}
            >
              Medium
            </div>
            <div
              className="dropdown-content-item"
              onClick={() => this.priorityDropDownHandleSubmit(3)}
            >
              High
            </div>
          </div>
        </div>

        <div className="dropdown">
          <button className="dropbtn">
            {this.state.color ? this.colorSwitchRendering() : "Color"}
          </button>
          <div className="dropdown-content">
            <div
              className="dropdown-content-item"
              onClick={() => this.colorDropDownHandleSubmit("#FF677D")}
            >
              Red
            </div>
            <div
              className="dropdown-content-item"
              onClick={() => this.colorDropDownHandleSubmit("#6CA0D1")}
            >
              Blue
            </div>
            <div
              className="dropdown-content-item"
              onClick={() => this.colorDropDownHandleSubmit("#FFEFEE")}
            >
              yellow
            </div>
          </div>
        </div>

        <div className="add-task-add-item-button" onClick={this.formHandleSubmit}>
          ADD ITEM
        </div>
      </div>
    );
  }
}
export default AddTask;
