// @flow
import * as React from 'react';
import Link from 'next/link';
import styles from './NavBar.module.scss';

export const NavBar = () => {
    return (
        <div className={styles.container}>
            <Link className={styles.link} href={'/'}>Main</Link>
            <Link className={styles.link} href={'/characters'}>Characters</Link>
        </div>
    );
};
