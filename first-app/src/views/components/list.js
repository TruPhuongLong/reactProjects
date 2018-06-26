import React from 'react';
import FlipMove from 'react-flip-move';

export const List = ({ itemSource = [], renderRow = f => f }) => (
    // <div style={localStyles.container}>
    //     {itemSource.map((item, i) =>
    //         renderRow(item, i)
    //     )}
    // </div>

    <div style={localStyles.container}>
        {itemSource.map((item, i) =>
            renderRow(item, i)
        )}
    </div>

)

const localStyles = {
    container: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'flex-start'
    }
}

