/* eslint-disable no-lone-blocks */
import React from 'react';

const Overview = (props) =>{
    const {tasks} = props;  {/*Destructuring*/}

        return (

            <ul>
                {tasks.map(task => {
                    // eslint-disable-next-line no-unreachable
                    return <li key={task.id}>{task.text}</li>;  {/* Displays an unordered list of tasks*/}
                }) 
                }
            </ul>
        );
    };

export default Overview;