import React from 'react';

export const Menu = ({menuVisible, handleMouseDown}) => {
    let visible = 'hide';

    if(menuVisible){
        visible = 'show'
    }else{
        visible = 'hide';
    }

    return (
        <div className={`${visible} flyoutmenu`} onMouseDown={handleMouseDown}>
            <h2><a href='#'>Home</a></h2>
            <h2><a href='#'>About</a></h2>
            <h2><a href='#'>Help</a></h2>
        </div>
    )
}