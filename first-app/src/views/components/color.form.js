import React from 'react';
// import PropTypes from 'prop-types';

export const ColorForm = ({ onSubmit = f => f }) => {
    let _title, _color
    const submit = (e) => {
        e.preventDefault();
        onSubmit(_title.value, _color.value);

    }

    return (
        <form onSubmit={submit} style={localStyles.container}>
            <input ref={input => _title = input}
                type="text"
                placeholder="color title..." 
                required 
                style={localStyles.inputTitle}
            />
            <input ref={input => _color = input}
                type="color" 
                required
            />
            <button type="submit" style={localStyles.button}>ADD</button>
        </form>
    )
}

const localStyles = {
    container: {
        display: 'flex',
        flexDirection: 'row',
        padding: 10,
    },
    inputTitle: {
        flex: 1,
    },
    button: {
        backgroundColor: 'green',
        color: 'white',
    }

}