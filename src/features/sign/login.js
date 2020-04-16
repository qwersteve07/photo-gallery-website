import React, { useState, useEffect } from 'react';
import styles from 'features/sign/index.module.sass';
import { signIn, signUp } from 'service/api-service';
import { saveAuth } from 'service/local-data-service';
import { useHistory } from 'react-router-dom';
import Input from 'components/input';
import Button from 'components/button';
import { PATH } from 'config';
import logo from 'images/logo.svg';
import classnames from 'classnames/bind';

const Login = () => {
    const cx = classnames.bind(styles);
    const [sign, setSign] = useState('signIn');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [againPassword, setAgainPassword] = useState('');
    const history = useHistory();

    useEffect(() => {
        setName('');
        setEmail('');
        setPassword('');
    }, [sign]);

    const onSignIn = () => {
        console.log(email, password);
        signIn(email, password)
            .then(value => {
                console.log(value);
                saveAuth(value.token_info.access_Token);
                console.log(value);
                history.push('/');
            })
            .catch(err => {
                console.log(err);
            });
    };

    const onSignUp = () => {
        console.log(name, email, password);
        signUp(name, email, password)
            .then(value => {
                console.log(value);
                saveAuth(value.token_info.access_Token);
                console.log(value);
                history.push('/');
            })
            .catch(err => {
                console.log(err);
            });
    };

    const signSwitch = [
        {
            name: 'signIn',
            text: '登入',
        },
        {
            name: 'signUp',
            text: '註冊',
        },
    ];

    const SignForm = () => {
        if (sign === 'signUp') {
            return (
                <>
                    <Input
                        label="輸入姓名"
                        placeholder="請輸入姓名"
                        value={name}
                        onTextChange={value => {
                            setName(value);
                        }}
                    />
                    <Input
                        label="輸入 email"
                        placeholder="請輸入 email"
                        value={email}
                        onTextChange={value => {
                            setEmail(value);
                        }}
                    />
                    <Input
                        label="輸入密碼"
                        type="password"
                        placeholder="請輸入密碼"
                        value={password}
                        onTextChange={value => {
                            setPassword(value);
                        }}
                    />
                    <Input
                        label="再次輸入密碼"
                        type="password"
                        placeholder="請再輸入密碼"
                        value={password}
                        onTextChange={value => {
                            setAgainPassword(value);
                        }}
                    />
                    <div className={styles.button}>
                        <Button text="註冊" onClick={onSignUp} />
                    </div>
                </>
            );
        } else {
            return (
                <>
                    <Input
                        label="輸入 email"
                        placeholder="請輸入 email"
                        value={email}
                        onTextChange={value => {
                            setEmail(value);
                        }}
                    />
                    <Input
                        label="輸入密碼"
                        type="password"
                        placeholder="請輸入密碼"
                        value={password}
                        onTextChange={value => {
                            setPassword(value);
                        }}
                    />
                    <div className={styles.button}>
                        <Button text="登入" onClick={onSignIn} />
                    </div>
                    <div
                        className={styles['sub-button']}
                        onClick={() => {
                            history.push(PATH.FORGET);
                        }}
                    >
                        忘記密碼
                    </div>
                </>
            );
        }
    };

    return (
        <div className={styles.sign}>
            <div className={styles.logo}>
                <img src={logo} alt="logo" />
            </div>
            <div className={styles.title}>NATURLLY</div>
            <div className={styles.desc}>製作你專屬的線上攝影集</div>
            <div className={styles.switch}>
                {signSwitch.map(s => {
                    const signClass = cx({
                        [s.name]: true,
                        active: s.name === sign,
                    });
                    return (
                        <span className={signClass} onClick={() => setSign(s.name)}>
                            {s.text}
                        </span>
                    );
                })}
            </div>
            <div className={styles.form}>{SignForm()}</div>
        </div>
    );
};

export default Login;
