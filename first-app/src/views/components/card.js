import React from 'react';

export const Card = ({ children, item, close }) => (
    <div style={{ backgroundColor: 'gray', color: 'white', width: 200, height: 'auto', padding: 10, margin: 1 }}>
        {children}
        <hr />
        <button onClick={() => close(item)}>close</button>
    </div>
)