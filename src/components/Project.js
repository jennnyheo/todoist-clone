import React, { useState } from 'react';
import { useProjectsValue, useSelectedProjectValue } from './context';
import { IndividualProject } from './IndividualProject';

export const Projects = ({activeValue = null}) => {
    const [active, setActive] = useState(activeValue);
    const {setSelectedProject} = useSelectedProjectValue();
    const {projects} = useProjectsValue();

    return(
        projects &&
        projects.map(project => (
            <li
                key={project.projectId}
                data-doc-id={project.docId}
                data-test-id="project-action"
                // role="button"
                className={
                    active === project.projectId
                    ? 'active sidebar__project'
                    : 'sidebar__project'
                }
            >
                <div
                    role="button"
                    data-testid="project-action"
                    tabIndex={0}
                    onClick={() => {
                        setActive(project.projectId);
                        setSelectedProject(project.projectId);
                    }}
                    onKeyDown={() => {
                        setActive(project.projectId);
                        setSelectedProject(project.projectId);
                    }}
                    onKeyDown = {(e) => {
                        if(e.key === 'Enter') {
                            setActive(project.projectId);
                            setSelectedProject(project.projectId);
                        }
                    }}
                    >
                    <IndividualProject project={project} />
                </div>
                

            </li>
        ))
    );
};