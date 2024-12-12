import React from 'react';
import Head from 'next/head';

type Props = {
    title: string;
    description?: string;
}

export const HeadMeta = ({title, description}: Props) => {
    return (
        <Head>
            <title>{title}</title>
            <meta name="description" content={description || ' Generated by create next app'}/>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <link rel="icon" href="/favicon.ico"/>
        </Head>
    );
};
