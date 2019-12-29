import React from "react";
import "./Header.css";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: "",
      priority: null,
      color: ""
    };
    // this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.handleSubmitDropDown = this.handleSubmitDropDown.bind(this);
  }

  handleChange = event => {
    this.setState({ term: event.target.value });
  };

  handleSubmit() {
    if (!this.state.term || !this.state.priority || !this.state.color) {
      return;
    }
    var newValue = {
      value: this.state.term,
      priority: this.state.priority,
      done: false,
      id:null,
      color: this.state.color,
      pinState: false
    };
    this.props.addItem(newValue);
    this.setState({ term: "", priority: "" });
  }

  handleSubmitDropDown = value => {
    this.setState({ priority: value });
  };
  handleSubmitColorDropDown = value => {
    this.setState({ color: value });
  };

  render() {
    return (
      <div className="header-container">
        <input
          type="text"
          value={this.state.term}
          onChange={this.handleChange}
        />
        <div className="dropdown">
          <button className="dropbtn">Priority</button>
          <div className="dropdown-content">
            <a href="#" onClick={() => this.handleSubmitDropDown(1)}>
              Low
            </a>
            <a href="#" onClick={() => this.handleSubmitDropDown(2)}>
              Medium
            </a>
            <a href="#" onClick={() => this.handleSubmitDropDown(3)}>
              High
            </a>
          </div>
        </div>

        <div className="dropdown">
          <button className="dropbtn">Color</button>
          <div className="dropdown-content">
            <a href="#" onClick={() => this.handleSubmitColorDropDown("red")}>
              Red
            </a>
            <a href="#" onClick={() => this.handleSubmitColorDropDown("blue")}>
              Blue
            </a>
            <a
              href="#"
              onClick={() => this.handleSubmitColorDropDown("yellow")}
            >
              yellow
            </a>
          </div>
        </div>
        <div className="header-add-item-button" onClick={this.handleSubmit}>
          ADD ITEM
        </div>
      </div>
    );
  }
}
export default Header;
