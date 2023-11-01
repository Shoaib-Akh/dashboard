import React from 'react';

function Button(props) {
    const { text, onClick, backgroundColor, color, borderRadius, padding, coustomStyle, width, height } = props;

    const buttonStyle = {
        backgroundColor: backgroundColor,
        color: color,
        borderRadius: borderRadius,
        padding: padding,

        width: width,
        height: height,
        border: "unset"
    };

    return (
        <button style={buttonStyle || coustomStyle} onClick={onClick}>
            {text}
        </button>
    );
}

export default Button;
