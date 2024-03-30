// link
import Link from "next/link";
//next hooks
import { usePathname } from "next/navigation";
//framer motion
import {motion} from 'framer-motion';

const links = [
    {path: '/', name: 'home'},
    {path: '/projects', name: 'my projects'},
    {path: '/contact', name: 'contact'},
]
const linksPt = [
    {path: '/', name: 'home'},
    {path: '/projetos', name: 'meus projetos'},
    {path: '/contato', name: 'contato'},
]

const Nav = ({containerStyles, linkStyles, underlineStyles, englishChoice }) => {
    const path = usePathname();

    return (
        <>
                {/* {englishChoice === "english"
                    ? 
                        <nav className={`${containerStyles}`}>
                            {links.map((link, index) => {
                                return (
                                    <Link 
                                        href={link.path}
                                        key={index}
                                        className={`capitalize ${linkStyles}`}
                                    >
                                        {link.path === path && (
                                            <motion.span
                                                initial={{y: '-100%'}}
                                                animate={{y: 0}}
                                                transition={{type: 'tween'}}
                                                layoutId="underline"
                                                className={`${underlineStyles}`}
                                            />
                                        )}
                                        {link.name}
                                    </Link>
                                )
                            })}
                        </nav>
                    : 
                        <nav className={`${containerStyles}`}>
                            {linksPt.map((link, index) => {
                                return (
                                    <Link 
                                        href={link.path}
                                        key={index}
                                        className={`capitalize ${linkStyles}`}
                                    >
                                        {link.path === path && (
                                            <motion.span
                                                initial={{y: '-100%'}}
                                                animate={{y: 0}}
                                                transition={{type: 'tween'}}
                                                layoutId="underline"
                                                className={`${underlineStyles}`}
                                            />
                                        )}
                                        {link.name}
                                    </Link>
                                )
                            })}
                        </nav>
                } */}
                {links.map((link, index) => {
                    return (
                        <Link 
                            href={link.path}
                            key={index}
                            className={`capitalize ${linkStyles}`}
                        >
                            {link.path === path && (
                                <motion.span
                                    initial={{y: '-100%'}}
                                    animate={{y: 0}}
                                    transition={{type: 'tween'}}
                                    layoutId="underline"
                                    className={`${underlineStyles}`}
                                />
                            )}
                            {link.name}
                        </Link>
                    )
                })}
        </>
        
    );
}
 
export default Nav;