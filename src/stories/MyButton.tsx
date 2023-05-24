import React from 'react';
// import Icon from '../icon';
import PropTypes from "prop-types";
import './mybutton.scss';

export default function MyButton({
    label,
    className,
    icon = {},
    handleOnClick,
    testId,
    ...props
}) {

    return <button className={`a-button ${className}`} data-testid={testId} {...props} onClick={handleOnClick}>
        {/* {Object.keys(icon).length > 0 && <Icon {...icon} />} */}
        <span>{label}</span>
    </button>
};

MyButton.propTypes = {
    label: PropTypes.string,
    className: PropTypes.string,
    icon: PropTypes.object,
    handleOnClick: PropTypes.func
}
