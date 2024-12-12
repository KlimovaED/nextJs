// @flow
import * as React from 'react';
import {getLayout} from '@/components/layout/Layout';
import {HeadMeta} from '@/components/head/HeadMeta';
import {useCharacter} from '@/assets/hooks/useCharacter';
import {CharacterCard} from '@/components/character/Character';


function Character()  {
    const character =useCharacter()

    return (
        <>
            <HeadMeta title={'Characters'}  />
            {character && <CharacterCard char={character} /> }

        </>
    );
};

Character.getLayout = getLayout;
export default Character;
