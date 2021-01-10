import React, { useState } from 'react';
import { FaChevronDown, FaInbox, FaRegCalendar, FaRegCalendarAlt } from 'react-icons/fa';
import { AddProject } from '../AddProject';
import { useSelectedProjectValue } from '../context';
import { Projects } from '../Project';


export const Sidebar = () => {
    const { setSelectedProject } = useSelectedProjectValue();
    const [ active, setActive ] = useState('inbox');
    const [ showProjects, setShowProjects ] = useState(true);

    return(
        <div className="sidebar" data-testid="sidebar">
            <ul className="sidebarBox sidebar__generic">
                <li data-testid="indox" className={active === 'inbox' ? 'active' : undefined} onClick={() => {
                    setActive('inbox');
                    setSelectedProject('INBOX')
                }}>
                    <span>
                        <FaInbox />
                    </span>
                    <span> Inbox</span>
                </li>
                <li data-testid="today" className={active === 'today' ? 'active' : undefined} onClick={() => {
                    setActive('today');
                    setSelectedProject('TODAY');
                }}>
                    <span>
                        <FaRegCalendar />
                    </span>
                    <span> Today</span>
                </li>
                <li data-testid="next_7" className={active === 'next_7' ? 'active' : undefined} onClick={() => {
                    setActive('next_7');
                    setSelectedProject('NEXT_7');
                }}>
                    <span>
                        <FaRegCalendarAlt />
                    </span>
                    <span> Next 7 days</span>
                </li>
            </ul>
                <div className="sidebar__middle" onClick={() => setShowProjects(!showProjects)}>
                    <span className="middleBar">
                        <FaChevronDown className={!showProjects ? 'hidden-project' : undefined}/>
                    </span>
                    <h2>Projects</h2>
                </div>
                <ul className="sidebar__projects">{showProjects && <Projects />}</ul>
                {showProjects && <AddProject />}
                

        </div>
    )
}