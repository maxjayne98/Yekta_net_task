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
          value: "task1",
          id: 70001,
          priority: 1,
          done: false,
          pinState: false,
          color: "#FF677D"
        },
        {
          value: "task2",
          id: 70000,
          priority: 1,
          done: false,
          pinState: false,
          color: "#FF677D"
        },
        {
          value: "task3",
          priority: 2,
          id: 20003,
          done: false,
          pinState: false,
          color: "#FFEFEE"
        },
        {
          value: "task4",
          priority: 3,
          id: 80000,
          done: false,
          pinState: true,
          color: "#FFEFEE"
        },
        {
          value: "task5",
          priority: 1,
          id: 90000,
          done: false,
          pinState: true,
          color: "#FFEFEE"
        },
        {
          value: "task6 ",
          priority: 3,
          id: 860000,
          done: false,
          pinState: false,
          color: "#6CA0D1"
        },
        {
          value: "task7",
          priority: 2,
          id: 8546000,
          done: false,
          pinState: false,
          color: "#FF677D"
        },
        {
          value: "task8",
          priority: 1,
          id: 780000,
          done: true,
          pinState: false,
          color: "#FF677D"
        }
      ]
    };
    this.makeDone = this.makeDone.bind(this);
    this.makePin = this.makePin.bind(this);
    this.deletTask = this.deletTask.bind(this);
  }
  componentDidMount() {
    this.sortTasks();
  }

  filterColorHandleSubmitDropDown(value) {
    this.setState({ colorFilter: value });
    this.setState({
      filtered: this.state.tasksList.filter(task => task.color === value)
    });
  }

  addItem = newValue => {
    const min = 1;
    const max = 10000;
    const rand = min + Math.random() * (max - min);

    const tasks = this.state.tasksList;
    newValue.id = rand;
    tasks.push(newValue);
    this.sortTasks();
    this.setState({ colorFilter: "" });
  };

  makeDone(id) {
    var itemIndex = this.state.tasksList
      .map(function(x) {
        return x.id;
      })
      .indexOf(id);
    var todo = this.state.tasksList[itemIndex];
    var todoItems = this.state.tasksList;
    todoItems.splice(itemIndex, 1);
    todo.done = !todo.done;
    todo.pinState = false;
    todo.done ? todoItems.push(todo) : todoItems.unshift(todo);
    this.setState({ tasksList: todoItems });
    this.sortTasks();
  }
  makePin(id) {
    var itemIndex = this.state.tasksList
      .map(function(x) {
        return x.id;
      })
      .indexOf(id);
    var todo = this.state.tasksList[itemIndex];
    var todoItems = this.state.tasksList;
    todoItems.splice(itemIndex, 1);
    todo.pinState = !todo.pinState;
    todo.pinState ? todoItems.push(todo) : todoItems.unshift(todo);
    this.setState({ tasksList: todoItems });
    this.sortTasks();
  }
  deletTask(id) {
    var itemIndex = this.state.tasksList
      .map(function(x) {
        return x.id;
      })
      .indexOf(id);
    console.log(itemIndex)
    // var todo = this.state.tasksList[itemIndex];
    var todoItems = this.state.tasksList;
    todoItems.splice(itemIndex, 1);
    // todo.pinState = !todo.pinState;
    // todo.pinState ? todoItems.push(todo) : todoItems.unshift(todo);
    this.setState({ tasksList: todoItems });
    this.sortTasks();
  }
  sortTasks() {
    this.setState({
      tasksList: this.state.tasksList.sort((a, b) =>
        a.priority > b.priority ? 1 : -1
      )
    });
  }
  colorSwitchRendering() {
    if (this.state.colorFilter === "#FF677D") return "Red";
    else if (this.state.colorFilter === "#6CA0D1") return "Blue";
    else if (this.state.colorFilter === "#FFEFEE") return "Yellow";
    else return "All";
  }
  render() {
    return (
      <div className="app-container">
        <div className="dropdown">
          <button className="dropbtn">
            {this.colorSwitchRendering() }
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
              onClick={() => this.filterColorHandleSubmitDropDown("#FF677D")}
            >
              Red
            </div>
            <div
              className="dropdown-content-item"
              onClick={() => this.filterColorHandleSubmitDropDown("#FFEFEE")}
            >
              Yellow
            </div>
            <div
              className="dropdown-content-item"
              onClick={() => this.filterColorHandleSubmitDropDown("#6CA0D1")}
            >
              Blue
            </div>
          </div>
        </div>
        <AddTask addItem={this.addItem} />
        <Tasks
          makeDone={this.makeDone}
          makePin={this.makePin}
          deletTask={this.deletTask}
          tasksList={
            this.state.colorFilter ? this.state.filtered : this.state.tasksList
          }
        />
      </div>
    );
  }
}

export default App;
