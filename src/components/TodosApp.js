import React, { useReducer, useEffect, useRef} from 'react';

import appReducer from './appReducer';
import TodosList from './TodosList';
import Context from './Context';

function useEffectOnce (cb) {
    const didRun = useRef(false);
    
    useEffect(
        () => {
            if (!didRun.current) {
                cb();
                didRun.current = true;
            }
        }
    );
}
export default function TodosApp () {
    const [state, dispatch ] = useReducer(appReducer, []) // use reducer hook

    useEffectOnce(()=> {
        const raw = localStorage.getItem('data');
        dispatch({ type: 'reset', payload: JSON.parse(raw)});
    });

    useEffect(
        ()=> {
        localStorage.setItem('data', JSON.stringify(state));
        },
        [state]
    );

    return (
    <Context.Provider value={dispatch}>
        <h1>Todos App</h1>
        <TodosList items={state} />
        <button onClick={() => dispatch({ type: 'add'})}>New Todo</button>
    </Context.Provider>
    )
}