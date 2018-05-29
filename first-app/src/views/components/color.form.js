import React from 'react';
import PropTypes from 'prop-types';

export const ColorForm = ({onSubmit = f=>f}) => {
    let _title, _color
    const submit = (e) => {
        e.preventDefault();
        onSubmit(_title.value, _color.value);
    }

    return (
        <form onSubmit={submit}>
            <input ref={input => _title = input}
                type="text"
                placeholder="color title..." required />
            <input ref={input => _color = input}
                type="color" required />
            <button>ADD</button>
        </form>
    )
}