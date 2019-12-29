import React from "react";
// import logo from './logo.svg';
import "./App.css";
import AddTask from "./components/AddTask";
import Tasks from "./components/TasksList";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      colorFilter: "",
      filtered: [],
      tasksList: [
        {
          value: "a",
          id: 70000,
          priority: 1,
          done: false,
          pinState: false,
          color: "red"
        },
        {
          value: "boro sare koche",
          id: 70000,
          priority: 1,
          done: false,
          pinState: false,
          color: "red"
        },
        {
          value: "bia inja done",
          priority: 2,
          id: 20003,
          done: false,
          pinState: false,
          color: "yellow"
        },
        {
          value: "bia inja ",
          priority: 3,
          id: 80000,
          done: false,
          pinState: true,
          color: "yellow"
        },
        {
          value: "bia inja ",
          priority: 1,
          id: 90000,
          done: false,
          pinState: true,
          color: "blue"
        },
        {
          value: "bia inja hello ",
          priority: 3,
          id: 860000,
          done: false,
          pinState: false,
          color: "blue"
        },
        {
          value: "haminja ",
          priority: 2,
          id: 8546000,
          done: false,
          pinState: false,
          color: "red"
        },
        {
          value: "haminja ",
          priority: 1,
          id: 780000,
          done: true,
          pinState: false,
          color: "red"
        }
      ]
    };
    this.makeDone = this.makeDone.bind(this);
    this.makePin = this.makePin.bind(this);
  }
  componentDidMount() {
    this.setState({
      tasksList: this.state.tasksList.sort((a, b) =>
        a.priority > b.priority ? 1 : -1
      )
    });
  }

  filterColorHandleSubmitDropDown(value) {
    this.setState({ colorFilter: value });
    this.setState({
      filtered: this.state.tasksList.filter(task => task.color === value)
    });
  }

  addItem = newValue => {
    const min = 1;
    const max = 1000;
    const rand = min + Math.random() * (max - min);

    const tasks = this.state.tasksList;
    newValue.id = rand;
    tasks.push(newValue);
    this.setState({
      tasksList: tasks.sort((a, b) => (a.priority > b.priority ? 1 : -1))
    });
    this.setState({ colorFilter: "" });
  };
  makeDone(id) {
    var itemIndex = this.state.tasksList.map((task,index) => {if(task.color === id) return index});
    console.log(itemIndex)
    // var todo = this.state.tasksList[itemIndex];
    // var todoItems = this.state.tasksList
    // todoItems.splice(itemIndex, 1);
    // todo.done = !todo.done;
    // todo.done ? todoItems.push(todo) : todoItems.unshift(todo);
    // this.setState({tasksList: todoItems});
  }
  makePin(id) {
    var itemIndex = this.state.tasksList.map((task,index) => {if(task.color === id) return index});
    console.log(itemIndex)
    // var todo = this.state.tasksList[itemIndex];
    // var todoItems = this.state.tasksList
    // todoItems.splice(itemIndex, 1);
    // todo.pinState = !todo.pinState;
    // todo.pinState ? todoItems.push(todo) : todoItems.unshift(todo);
    // this.setState({tasksList: todoItems});
  }
  render() {
    return (
      <div className="App-container">
        <div className="dropdown">
          <button className="dropbtn">
            {this.state.colorFilter ? this.state.colorFilter : "choose color"}
          </button>
          <div className="dropdown-content">
            <div
              className="dropdown-content-item"
              onClick={() => this.filterColorHandleSubmitDropDown("")}
            >
              All
            </div>
            <div
              className="dropdown-content-item"
              onClick={() => this.filterColorHandleSubmitDropDown("red")}
            >
              Red
            </div>
            <div
              className="dropdown-content-item"
              onClick={() => this.filterColorHandleSubmitDropDown("yellow")}
            >
              Yellow
            </div>
            <div
              className="dropdown-content-item"
              onClick={() => this.filterColorHandleSubmitDropDown("blue")}
            >
              Blue
            </div>
          </div>
        </div>
        <AddTask addItem={this.addItem} />
        <Tasks
          makeDone={this.makeDone}
          makePin={this.makePin}
          tasksList={
            this.state.colorFilter ? this.state.filtered : this.state.tasksList
          }
        />
      </div>
    );
  }
}

export default App;
