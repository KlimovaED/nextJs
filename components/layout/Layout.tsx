import React, {PropsWithChildren, ReactElement} from 'react';
import {NextPage} from 'next';
import styles from '@/styles/Home.module.css';
import {NavBar} from '@/components/navBar/NavBar';
import {geistMono, geistSans} from '@/assets/types/types';

export const Layout:NextPage<PropsWithChildren> = ({children}) => {
    return (
    <div className={`${styles.page} ${geistSans.variable} ${geistMono.variable}`}>
        <NavBar/>
        <main className={styles.main}>
            {children}
        </main>
    </div>
    );
};

export const getLayout=(page:ReactElement)=>{
    return <Layout>{page}</Layout>
}
