import React from 'react';
import styles from 'components/button/index.module.sass';
import classnames from 'classnames/bind';

const Button = ({ text, size = '', theme = 'brown', onClick }) => {
    const cx = classnames.bind(styles);

    const buttonClass = cx({
        button: true,
        [size]: size === 'small',
        [theme]: true,
    });

    return (
        <>
            <button className={buttonClass} onClick={onClick}>
                {text}
            </button>
        </>
    );
};

export default Button;
