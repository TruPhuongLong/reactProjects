import React from 'react';

export const MenuButton = ({handleMouseDown}) => {
    return (
        <button className="roundButton" onMouseDown={handleMouseDown}></button>
    )
}