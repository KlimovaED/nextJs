import {useCharacters} from '@/assets/hooks/useCharacters';
import {CharacterCard} from '@/components/character/Character';
import {HeadMeta} from '@/components/head/HeadMeta';
import React from 'react';
import {getLayout} from '@/components/layout/Layout';
import Link from 'next/link';


function Characters() {
const characters=useCharacters();

  return (
    <>
        <HeadMeta title={'Characters'}  />
            {characters && characters.map((char) => (
           <Link href={`/characters/${char.id}`} key={char.id}>
               <CharacterCard char={char} key={char.id} />
           </Link>
            ))}

    </>
  );
}

Characters.getLayout=getLayout;
export default Characters;
