'use client'

import React, {useState, useEffect } from 'react';
//components
import ThemeToggle from "./ThemeToggle";
import Logo from './Logo';
import Nav from './Nav';
import MobileNav from './MobileNav';

const Header = () => {
    return (
        <header>
            <div className="container mx-auto">
                <div className='flex justify-between items-center'>
                    <Logo />
                    <div className='flex items-center gap-x-6'>
                        {/* Nav */}
                        <Nav
                            containerStyles={'hidden xl:flex gap-x-8 items-center'}
                            linkStyles="relative hover:text-primary transition-all"
                            underlineStyles="absolute left-0 top-full h-[2px] bg-primary w-full"
                        />
                        <ThemeToggle />
                        {/* Mobile Nav */}
                        <div className='xl:hidden'>
                            <MobileNav />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
 
export default Header;