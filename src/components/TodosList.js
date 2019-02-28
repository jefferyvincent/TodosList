import React from 'react';
import TodosItem from './TodosItem';

export default function TodosList ({items, context}) {
    return items.map((item) => (
        <TodosItem key={item.id} {...item} />
    ));
}