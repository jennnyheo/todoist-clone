import React, { useEffect } from 'react';
import { collatedTaskExist, getCollatedTitle, getTitle } from '../helpers';
import { useTasks } from '../hooks';
import { AddTask } from './AddTask';
import {Checkbox} from './Checkbox';
import { collatedTasks } from './constants';
import { useProjectsValue, useSelectedProjectValue } from './context';

export const Tasks = () => {

    const {selectedProject} = useSelectedProjectValue();
    const {projects} = useProjectsValue();
    const {tasks} = useTasks(selectedProject);


    let projectName = '';

    if (projects && selectedProject && !collatedTaskExist(selectedProject)) {
        projectName = getTitle(projects, selectedProject).name
    }

    if (collatedTaskExist(selectedProject) && selectedProject) {
        projectName = getCollatedTitle(collatedTasks, selectedProject).name
    }

    useEffect(() => {
        document.title = `${projectName} : Todoist`;
    });
    
    return(
        <div className="tasks">
            <h2 className="taskName" data-testid="project-name">{projectName}</h2>
            <ul className="tasks__list">
                {tasks.map((task) => (
                    <li key={`${task.id}`} className="task_li">
                        <Checkbox id={task.id}/>
                        <span>{task.task}</span>    
                    </li>
                ))}
            </ul>
            <AddTask />
        </div>
    )

}