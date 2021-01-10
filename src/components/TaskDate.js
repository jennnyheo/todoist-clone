import React from 'react';
import { FaRegPaperPlane, FaSpaceShuttle } from 'react-icons/fa';
import moment from 'moment';

export const TaskDate = ({ setTaskDate, showTaskDate, setShowTaskDate}) => 
    showTaskDate && (
        <div className="task-date" data-testid="task-date-overlay">
            <ul className="task-date__list">
            <li
                onClick={() => {
                    setShowTaskDate(false);
                    setTaskDate(moment().format('DD/MM/YYYY'));
                }}
                data-testid="tast-date-date"
            >
                <span>
                    <FaSpaceShuttle />
                </span>
                <span>Today</span>
            </li>
            <li
                onClick={() => {
                    setShowTaskDate(false);
                    setTaskDate(moment().add(1, 'day').format('DD/MM/YYYY'));
                }}
                data-testid="tast-date-tomorrow"
            >
                <span>
                    <FaSpaceShuttle />
                </span>
                <span>Tomorrow</span>
            </li>
            <li
                onClick={() => {
                    setShowTaskDate(false);
                    setTaskDate(moment().add(7, 'days').format('DD/MM/YYYY'));
                }}
                data-testid="tast-date-next-week"
            >
                <span>
                    <FaRegPaperPlane />
                </span>
                <span>Today</span>
            </li>

            </ul>
        </div>
    )