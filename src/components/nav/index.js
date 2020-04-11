import React from 'react';
import styles from 'components/nav/index.module.scss';
import { Link } from 'react-router-dom';
import { PATH } from 'config';

const Nav = () => {
    return (
        <>
            <div className={styles.nav}>
                <div className={styles.left}>logo</div>
                <div className={styles.right}>
                    <Link to={PATH.INFO}>個人資料</Link>
                    <button>登出</button>
                </div>
            </div>
        </>
    );
};

export default Nav;
