import React, { useState, useEffect } from 'react';
import styles from 'components/input/index.module.sass';

const Input = ({ label, type = 'text', placeholder, value, onTextChange }) => {
    const [text, setText] = useState('');

    useEffect(() => {
        setText(value);
    }, [value]);

    return (
        <>
            <label className={styles.label}>{label}</label>
            <input
                className={styles.input}
                type={type}
                value={text}
                placeholder={placeholder}
                onChange={e => {
                    setText(e.target.value);
                    onTextChange(e.target.value);
                }}
            />
        </>
    );
};

export default Input;
