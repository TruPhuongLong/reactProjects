import React from 'react';

export const List = ({itemSource})=>(
    <div>
        {itemSource.map(item => <p>{item}</p>)}
    </div>
)