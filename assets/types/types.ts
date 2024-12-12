import {Geist, Geist_Mono} from 'next/font/google';

export type CharacterType = {
    id: number;
    name: string;
    image: string;
}

export type Nullable<T> = null | T ;


export const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

export const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});
