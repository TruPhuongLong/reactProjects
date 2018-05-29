import React from 'react';

export const Card = ({ children, item, close = f=>f }) => (
    <div style={localStyles.constainer}>
        {children}
        <hr style={{width: '80%'}}/>
        <button onClick={()=>close(item)} style={localStyles.button}>close</button>
    </div>
)

const localStyles = {
    constainer: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'gray',
        color: 'white',
        width: 200,
        height: 'auto',
        padding: 10,
        margin: 40,
    },
    button: {
        padding: 5,
    }
}