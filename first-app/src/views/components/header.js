import React from 'react';
export const Header = ({children, bodyColor})=>(
    <div style={{backgroundColor: 'black', color: 'white', padding: 20, margin: 1}}>
        
        {children}
        <p style={{color: bodyColor, textAlign: 'center'}}>welcome</p>
    </div>
)
Header.defaultProps = {
    bodyColor: 'red'
}
