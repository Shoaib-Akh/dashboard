import React from 'react';

function Button(props) {
    const { text, onClick, backgroundColor, color, borderRadius, padding, coustomStyle } = props;

    const buttonStyle = {
        backgroundColor: backgroundColor,
        color: color,
        borderRadius: borderRadius,
        padding: padding,
        opacity: 0.1,
        width: " 162px",
        height: " 45px",
        border: "unset"
    };

    return (
        <button style={buttonStyle || coustomStyle} onClick={onClick}>
            {text}
        </button>
    );
}

export default Button;
