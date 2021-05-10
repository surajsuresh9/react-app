import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Tasks from "./components/Tasks";
import About from "./components/About";
import AddTask from "./components/AddTask";
import {BrowserRouter as Router, Route} from 'react-dom'
const App = () => {

  const [showAddTask,setshowAddTask] = useState(true);

  const [tasks, setTask] = useState([
    { id: 1, text: "Doctors Appointment 1", day: "Feb 5th", reminder: true },
    { id: 2, text: "Doctors Appointment 2", day: "Feb 6th", reminder: true },
    { id: 3, text: "Doctors Appointment 3", day: "Feb 7th", reminder: true },
  ]);

  const deleteTask = (id) => {
   setTask(tasks.filter((task)=>(
    task.id!==id)))
}

const addTask=(task)=>{
  console.log(task);
  const id = Math.floor((Math.random)*10000);
  const newTask = {id,...task};
  setTask([...tasks,newTask]);
}


const toggleReminder=(id)=>{
  console.log(id);
  setTask(tasks.map((task)=>task.id===id?{...task,reminder:!task.reminder}:task))
}

  return (
    <Router>
    <div className="container">
      <Header onAdd={()=>setshowAddTask(!showAddTask)} showAdd={showAddTask} />
      {showAddTask && < AddTask onAdd={addTask} />}
      {tasks.length>0?<Tasks tasks={tasks} onDelete={deleteTask} toggleReminder={toggleReminder} />:'No tasks available'}
      <br/>
      <Footer/>
    </div>
    <Route path='/about' component={About}/ >
    </Router>
  );
};

export default App;
