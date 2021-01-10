import React, { useState } from 'react';
import {FaPizzaSlice} from 'react-icons/fa';
import { AddTask } from '../AddTask';
import logo from './logo.png';
export const Header = ({darkMode,setDarkMode}) => {
    const [shouldShowMain, setShouldShowMain] = useState(false);
    const [showQuickAddTask, setShowQuickAddTask] = useState(false);
    return(
        <header className="header" data-testid="header">
            <nav className="darkmode">
                <div className="logo">
                    <img src={logo} alt="todo" className="logo-img"/>
                </div>
                <div className="setting">
                    <ul className="settingBox">
                        <li className="settings__add headerList" className="settings__add">
                            <button
                                data-testid="quick-add-task-action"
                                type="button"
                                onClick={() => {
                                    setShowQuickAddTask(true);
                                    setShouldShowMain(true);
                                }}
                            >+</button>
                        </li>
                        <li 
                            className="headerList settings__darkmode" 
                            data-testid="dark-mode-action" 
                            onClick={() => setDarkMode(!darkMode)}
                        >
                            <FaPizzaSlice />
                        </li>
                    </ul>
                </div>
            </nav>
            <AddTask 
                showAddTaskMain={false}
                shouldShowMain={shouldShowMain}
                showQuickAddTask={showQuickAddTask}
                setShowQuickAddTask={setShowQuickAddTask}
            />
        </header>
    )
}