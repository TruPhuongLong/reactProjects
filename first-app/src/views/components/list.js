import React from 'react';

export const List = ({ itemSource = [], renderRow = f=>f }) => (
    <div style={localStyles.container}>
        {itemSource.map((item,i) =>
            renderRow(item,i)
        )}
    </div>
)

const localStyles = {
    container: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around' 
    }
}

