import React from 'react';
import { Tasks } from '../Tasks';
import { Sidebar } from './Sidebar';

export const Content = () => {
    return(
        <section>
            <Sidebar /> 
            <Tasks />
        </section>
    )
}