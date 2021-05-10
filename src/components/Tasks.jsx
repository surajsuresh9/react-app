import React from 'react'
import Task from './Task'


// const tasks=[
//     { id: 1, text: "Doctors Appointment 1", day: "Feb 5th", reminder: true },
//     { id: 2, text: "Doctors Appointment 2", day: "Feb 6th", reminder: false },
//     { id: 3, text: "Doctors Appointment 3", day: "Feb 7th", reminder: true },
//   ]

const Tasks = ({tasks, onDelete, toggleReminder}) => {
    return(
        <>
        {tasks.map((task)=>(<Task key={task.id} task = {task} onDelete={onDelete} toggleReminder={toggleReminder} / >)
        )}
        </>
    )

}

export default Tasks
