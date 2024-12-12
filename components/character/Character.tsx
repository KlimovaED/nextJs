// @flow
import * as React from 'react';
import Image from 'next/image';
import {CharacterType} from '@/assets/types/types';
import styles from './charterCard.module.scss'


type Props = {
    char:CharacterType
};
export const CharacterCard = ({char}: Props) => {
    return (
        <div className={styles.characterCard}>
            <div>{char.name}</div>
            <Image src={char.image} alt={`picture of ${char.name}`} width={300}
                   height={300}/>
        </div>
    );
};
