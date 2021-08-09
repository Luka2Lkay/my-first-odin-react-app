import React, {Component} from "react";
import Overview from "./components/Overview";
import uniqid from "uniqid";



class App extends Component {

  constructor() {
    super();
    this.state = {
      task: {text: '', id: uniqid()},
      tasks: [],
    };
  
  }

  handleChange = (e) =>{
    this.setState({
      task: {
        text: e.target.value,
        id: this.state.task.id,
      }
    })
  }

  onSubmitTask = (e) =>{
    e.preventDefault();
    this.setState({
      tasks: this.state.tasks.concat(this.state.task),
      task: {text: '', id: uniqid()},
    });
  }

   render(){
    
     const {task, tasks} = this.state;  
 // eslint-disable-next-line no-lone-blocks
 {/*Detructuring for cleaner code*/}
     return (
        <div>

          {/* Use onSubmit in the form tag if the button type is set to submit.
          Alternatively, you can use onClick in the button tag to submit the form */}

          <form onSubmit = {this.onSubmitTask} >
            <label htmlFor="taskInput">Enter task</label>
          
            {/* Specify the value of the input field to be what I saved in my task object */}
          
            <input onChange = {this.handleChange} value = {task.text} type="text" id="taskInput"/>
            <button type="submit">Add Task</button>
          </form>
          <Overview tasks={tasks}/>
        </div>
     );
   }
  }

export default App;
