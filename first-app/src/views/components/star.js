import React from 'react';
import PropTypes from 'prop-types'

export const Star = ({ selected = false, onClick = f => f }) => {
    // console.log('create Star')
    return (
        <div className={(selected) ? "star selected" : "star"}
            onClick={onClick}>
        </div>
    )
}
Star.propTypes = {
    selected: PropTypes.bool,
    onClick: PropTypes.func
}