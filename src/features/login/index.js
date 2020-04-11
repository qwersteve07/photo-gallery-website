import React, { useState, useEffect } from 'react';
import styles from 'features/login/index.module.scss';
import { signIn } from 'service/api-service';

const Login = () => {
    const [sign, setSign] = useState('signIn');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        setName('');
        setEmail('');
        setPassword('');
    }, [sign]);

    const onSignIn = () => {
        signIn(email, password)
            .then(value => {
                saveAuth(value.token_info.access_Token);
                console.log(value);
                history.push('/');
            })
            .catch(err => {
                console.log(err);
            });
    };

    const onSignUp = () => {
        signIn(name, email, password)
            .then(value => {
                saveAuth(value.token_info.access_Token);
                console.log(value);
                history.push('/');
            })
            .catch(err => {
                console.log(err);
            });
    };

    const SignForm = () => {
        if (sign === 'signIn') {
            return (
                <>
                    <input type="email" onChange={e => setEmail(e.target.value)} />
                    <input type="password" onChange={e => setPassword(e.target.value)} />
                    <button onClick={onSignUp}>登入</button>
                </>
            );
        } else {
            return (
                <>
                    <input type="text" onChange={e => setName(e.target.value)} />
                    <input type="email" onChange={e => setEmail(e.target.value)} />
                    <input type="password" onChange={e => setPassword(e.target.value)} />
                    <button onClick={onSignIn}>註冊</button>
                </>
            );
        }
    };

    return (
        <div className={styles.login}>
            <div className={styles.switch}>
                <div
                    onClick={() => {
                        setSign('signIn');
                    }}
                >
                    signIn
                </div>
                <div
                    onClick={() => {
                        setSign('signUp');
                    }}
                >
                    signUp
                </div>
            </div>
            <SignForm />
        </div>
    );
};

export default Login;
