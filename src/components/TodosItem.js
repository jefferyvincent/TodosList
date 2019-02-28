import React, { useContext } from 'react';
import Context from './Context';

export default function TodosItem ({id, completed, text}) {
    const dispatch = useContext(Context); // context hook
    
    let txt = <input type="text" defaultValue={text} onChange={(event)=> dispatch({ type: 'change', payload: {id: id, text: event.target.value} })} />;
    let del = '';

    if (completed) {
        txt = <div className="completed">{text}</div>; 
        del = <button onClick={()=> dispatch({type: 'delete', payload: id})}>Delete</button>;   
    }
    return (
    <div className="toDoItem">
        <input type="checkbox" checked={completed} onChange={()=> dispatch({ type: 'completed', payload: id})}/>
        {txt}
        {del}
    </div>)
}