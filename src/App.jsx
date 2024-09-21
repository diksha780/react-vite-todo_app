// import './App.css'
import { Component } from "react";
import AppName from "/src/components/AppName";
import AddTodo from "./components/AddTodo";

import TodoItem1 from "./components/TodoItem1";
import TodoItem2 from "./components/TodoItem2";
import "./App.css";
function App() {
  return (
    <center class="todo-container">
      {/* <h1>TODO APP</h1> */}
      <AppName />

      <AddTodo />
      <AddTodo />
      <div className="item-container">
        <TodoItem1 />
        <TodoItem2 />
      </div>
      {/* <div class="row justify-content-md-center">
          <div class="col-md-auto">
          <input type="text" placeholder="Enter todo here"></input>
          </div>
          <div class="col col-lg-2">
          <input type="date"></input>
          </div>
          <div class="col col-lg-2">
          <button type="button" class="btn btn-success">
          Add
          </button>
          </div>
          </div> */}

      {/* <div class="row">
          <div class="col-md-auto">Buy Milk</div>
          <div class="col col-lg-2">17/9/2024</div>
          <div class="col col-lg-2">
            <button type="button" class="btn btn-danger">
              Danger
            </button>
          </div>
        </div> */}

      {/* <div class="container text-center">
        <div class="row">
          <div class="col-md-auto">Go to college</div>
          <div class="col col-lg-2">4/9/2024</div>
          <div class="col col-lg-2">
            <button type="button" class="btn btn-danger">
              Danger
            </button>
          </div>
        </div>
        <br></br>
      </div> */}
    </center>
  );
}
export default App;
