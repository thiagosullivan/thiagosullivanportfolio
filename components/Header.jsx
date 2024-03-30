'use client'

import React, {useState, useEffect } from 'react';
//components
import ThemeToggle from "./ThemeToggle";
import Logo from './Logo';
import Nav from './Nav';
import MobileNav from './MobileNav';
import { usePathname } from 'next/navigation';
import { Button } from './ui/button';
import Image from 'next/image';

import BraFlag from '../public/brazil-flag.jpg';
import UsaFlag from '../public/usa-flag.jpg';

import { changeLanguage } from '@/redux/features/language';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/redux/store';

const Header = ({language}) => {
    const [header, setHeader] = useState(false);
    const [englishChoice, setEnglishChoice] = useState("english");
    const pathname = usePathname();

    const dispatch = useDispatch();
    // console.log(englishChoice, "IDIOMA SELECIONADO")

    useEffect(() => {
        dispatch(changeLanguage(englishChoice));
            // console.log("USE EFFECT", englishChoice)
    }, [englishChoice])
    
    useEffect(()=> {
        const scrollYPos = window.addEventListener('scroll', ()=> {
            window.scrollY > 50 ? setHeader(true) : setHeader(false);
        });

        //remove event 
        return () => window.removeEventListener('scroll', scrollYPos);
    })

    return (
        <header
            className={`${
                header
                    ? 'py-5 bg-white shadow-lg dark:bg-accent'
                    : 'py-6 dark:bg-transparent'
                } sticky top-0 z-30 transition-all ${pathname === '/' && 'bg-[#fef9f5]'}`}>
            <div className="container mx-auto">
                <div className='flex justify-between items-center'>
                    <Logo />
                    <div className='flex items-center gap-x-6'>
                        {/* Nav */}
                        <Nav
                            containerStyles={'hidden xl:flex gap-x-8 items-center'}
                            linkStyles="relative hover:text-primary transition-all"
                            underlineStyles="absolute left-0 top-full h-[2px] bg-primary w-full"
                            englishChoice={englishChoice}
                        />
                        <ThemeToggle />
                        {/* Mobile Nav */}
                        <div className='xl:hidden'>
                            <MobileNav />
                        </div>
                        {/* <div className='flex flex-col items-center'>
                                {englishChoice === "english" ? <p>Language:</p> : <p>Idioma:</p>}
                            <div className='flex gap-x-1 mt-1'>
                                <Button
                                    className="border-none bg-transparent w-[30px] h-[18px] min-w-0 p-0 relative cursor-pointer"
                                    value="portuguese"
                                    onClick={() => setEnglishChoice("portuguese")}
                                >
                                    <Image
                                        src={BraFlag}
                                        alt="Português"
                                        fill
                                        className='absolute'
                                    />
                                </Button>
                                <Button
                                    className="border-none bg-transparent w-[30px] h-[18px] min-w-0 p-0 relative cursor-pointer"
                                    value="english"
                                    onClick={() => setEnglishChoice("english")}
                                >
                                    <Image
                                        src={UsaFlag}
                                        alt="English"
                                        fill
                                        className='absolute'
                                    />
                                </Button>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </header>
    );
}
 
export default Header;