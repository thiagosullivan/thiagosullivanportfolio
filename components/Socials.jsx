'use client'

import {
    RiYoutubeFill,
    RiLinkedinFill,
    RiGithubFill,
    RiFacebookFill,
    RiInstagramFill,
    RiWhatsappFill
} from 'react-icons/ri';
import Link from 'next/link';

const icons = [
    {
        path: 'https://www.linkedin.com/in/thiagosullivan/',
        name: <RiLinkedinFill />
    },
    {
        path: 'https://github.com/thiagosullivan',
        name: <RiGithubFill />
    },
    {
        path: 'https://www.facebook.com/tihsullivan',
        name: <RiFacebookFill />
    },
    {
        path: 'https://wa.me/5543998481727',
        name: <RiWhatsappFill />
    },
    {
        path: 'https://www.instagram.com/thiagosullivan/',
        name: <RiInstagramFill />
    },
]

const Socials = ({containerStyles, iconsStyles}) => {
    return (
        <div className={`${containerStyles}`}>
            {icons.map((icon, index) => {
                return (
                    <Link href={icon.path} key={index} target='_blank' noopener noreferrer>
                        <div className={`${iconsStyles}`}>{icon.name}</div>
                    </Link>
                )
            })}
        </div>
    );
}
 
export default Socials;