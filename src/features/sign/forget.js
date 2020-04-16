import React, { useState, useEffect } from 'react';
import styles from 'features/sign/index.module.sass';
import { signIn, signUp } from 'service/api-service';
import { saveAuth } from 'service/local-data-service';
import { useHistory } from 'react-router-dom';
import Input from 'components/input';
import Button from 'components/button';
import { PATH } from 'config';
import logo from 'images/logo.svg';

const Login = () => {
    const [email, setEmail] = useState('');
    const history = useHistory();

    useEffect(() => {
        setEmail('');
    }, []);

    const onResetPassword = () => {
        return '';
    };

    return (
        <div className={styles.sign}>
            <div className={styles.logo}>
                <img src={logo} alt="logo" />
            </div>
            <div className={styles.title}>NATURLLY</div>
            <div className={styles.desc}>製作你專屬的線上攝影集</div>
            <div className={styles.note}>請輸入電子郵件，我們將寄送重設密碼的信件至您的信箱</div>
            <div className={styles.form}>
                <Input
                    label="輸入 email"
                    placeholder="請輸入 email"
                    value={email}
                    onTextChange={value => {
                        setEmail(value);
                    }}
                />
                <div className={styles.button}>
                    <Button text="取得新密碼" onClick={onResetPassword} />
                </div>
                <div
                    className={styles['sub-button']}
                    onClick={() => {
                        history.push(PATH.LOGIN);
                    }}
                >
                    返回
                </div>
            </div>
        </div>
    );
};

export default Login;
