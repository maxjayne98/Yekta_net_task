import React from "react";
// import logo from './logo.svg';
import "./App.css";
import Header from "./components/Header";
import Tasks from "./components/TasksList";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      colorFilter: "",
      filtered: [],
      tasksList: [
        {
          value: "boro sare koche",
          id:0,
          priority: 1,
          done: false,
          pinState: false,
          color: "red"
        },
        {
          value: "bia inja done",
          priority: 2,
          id:1,
          done: false,
          pinState: false,
          color: "yellow"
        },
        {
          value: "bia inja ",
          priority: 3,
          id:2,
          done: false,
          pinState: true,
          color: "yellow"
        },
        {
          value: "bia inja ",
          priority: 1,
          id:3,
          done: false,
          pinState: true,
          color: "blue"
        },
        {
          value: "bia inja hello ",
          priority: 3,
          id:4,
          done: false,
          pinState: false,
          color: "blue"
        },
        {
          value: "haminja ",
          priority: 2,
          id:5,
          done: false,
          pinState: false,
          color: "red"
        },
        {
          value: "haminja ",
          priority: 1,
          id:6,
          done: true,
          pinState: false,
          color: "red"
        }
      ]
    };
  }
  componentDidMount() {
    console.log(this.state.tasksList)
    this.setState({
      tasksList: this.state.tasksList.sort((a, b) =>
        a.priority > b.priority ? 1 : -1
      )
    });
  }

  handleSubmitDropDown(value) {
    this.setState({colorFilter: value});
    this.setState({
     filtered: this.state.tasksList.filter(
      task => task.color === value
     )
    });
   };

  addItem = newValue => {
    const tasks = this.state.tasksList;
    newValue.id = this.state.tasksList.length
    tasks.push(newValue);
    this.setState({
      tasksList: tasks.sort((a, b) => (a.priority > b.priority ? 1 : -1))
    });
    this.setState({ colorFilter: "" });
  };
  makeDone(id){
    this.state.tasksList.filter(
      task => task.color === id
     )
  }
  makePin(id){
    this.state.tasksList.filter(
      task => task.color === id
     )
  }
  render() {
    console.log(this.state.colorFilter);
    return (
      <div className="App-container">
        <div className="dropdown">
          <button className="dropbtn">
            {this.state.colorFilter ? this.state.colorFilter : "choose color"}
          </button>
          <div className="dropdown-content">
            <a href="#" onClick={() => this.handleSubmitDropDown("")}>
              All
            </a>
            <a href="#" onClick={() => this.handleSubmitDropDown("red")}>
              Red
            </a>
            <a href="#" onClick={() => this.handleSubmitDropDown("yellow")}>
              Yellow
            </a>
            <a href="#" onClick={() => this.handleSubmitDropDown("blue")}>
              Blue
            </a>
          </div>
        </div>
        <Header addItem={this.addItem} />
        <Tasks
          tasksList={
            this.state.colorFilter ? this.state.filtered : this.state.tasksList
          }
        />
      </div>
    );
  }
}

export default App;
