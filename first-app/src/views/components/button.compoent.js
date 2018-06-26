import React from 'react';

export const Button = ({ children, style , onClick}) => {
    return (
        <button className="btn btn-success center btn-square" onClick={onClick}>
            <h2>
                {children}
            </h2>
        </button>
    )
}