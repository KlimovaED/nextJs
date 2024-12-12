import {useEffect, useState} from 'react';
import axios from 'axios';
import {CharacterType, Nullable} from '@/assets/types/types';

export const useCharacters = ():Nullable<CharacterType[]>  => {
    const [characters,setCharacters] = useState<Nullable<CharacterType[]>>(null);

    useEffect(() => {
        axios.get(`${process.env.NEXT_PUBLIC_RICK_AND_MORTI_API_URL}/character`).then((res)=>setCharacters(res.data.results));
    }, []);

return characters;
}
