import Link from 'next/link';
import { Button } from './ui/button';
import { Download, Send } from 'lucide-react';

import {
    Ribriefcase4Fill,
    RiTeamFill,
    RiTodoFill,
    RiArrowDownSLine,
    RiBriefcase4Fill,
} from 'react-icons/ri';

import DevImg from './DevImg';
import Socials from './Socials';
import Badge from './Badge';
import Image from 'next/image';

const Hero = ({languageChoice}) => {
    return (
        <section className='py-12 xl:py-24 h-[84vh] xl:pt-28 bg-hero bg-no-repeat bg-bottom bg-cover dark:bg-none'>
            <div className="container mx-auto">
                <div className='flex justify-between gap-x-8'>
                    <div className='flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left'>
                        <div className='text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]'>
                            {/* { languageChoice === "english"
                                ? 'Web Developer'
                                : 'Desenvolvedor Web'} */}
                            Web Developer
                        </div>
                        <h1 className='h1 text-secondary'>
                            {languageChoice === "english" && 'Hello, my name is Thiago!'}
                            {languageChoice === "portuguese" && 'Olá, meu nome é Thiago!'}
                            Hello, my name is Thiago!
                        </h1>
                        <p className='subtitle max-w-[490px] mx-auto xl:mx-0 mt-6'>
                            {languageChoice === "english" && 'But you can call me "Sullivan". Here you gonna find stuff related with my experiences and my best projects throughout my years working as a web development.'}
                            {languageChoice === "portuguese" && 'Mas pode me chamar de "Sullivan". Aqui você encontrará coisas relacionadas à minhas experiências e meus melhores projetos ao longo dos anos trabalhando como desenvolvedor web.'}
                            But you can call me "Sullivan". Here you gonna find stuff related with my experiences and my best projects throughout my years working as a web development.
                        </p>

                        <div className='flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12'>
                            <Link href="/contact">
                                <Button className="gap-x-2">Contact me <Send size={18} /></Button>
                            </Link>
                            <a href="/thiago-cv-eng.pdf" download="thiago-cv-eng">
                                <Button variant="secondary" className="gap-x-2">Download CV <Download size={18} /></Button>
                            </a>
                        </div>
                        <Socials
                            containerStyles="flex gap-x-6 mx-auto xl:mx-0"
                            iconsStyles='text-foreground text-[22px] hover:text-primary transition-all-'
                        />
                    </div>
                    {/* Image */}
                    <div className='hidden xl:flex relative'>
                        {/* Badge 1 */}
                        <Badge
                            icon={<RiBriefcase4Fill />}
                            endCountNum={5}
                            badgeText="Years of Experience"
                            containerStyles="absolute top=[24%] -left-[5rem]"
                        />
                        {/* Badge 2 */}
                        <Badge
                            icon={<RiTodoFill />}
                            endCountNum={32}
                            endCountText=""
                            badgeText="Finished Projects"
                            containerStyles="absolute top-[80%] -left-[1rem]"
                        />
                        {/* Badge 3 */}
                        <Badge
                            icon={<RiTeamFill />}
                            endCountNum={19}
                            endCountText=""
                            badgeText="Happy Clients"
                            containerStyles="absolute top-[55%] -right-8"
                        />
                        {/* <div className="bg-hero_shape2_light dark:bg-hero_shape2_dark w-[500px] h-[500px] bg-no-repeat absolute -top-1 -right-2"></div> */}
                        {/* <DevImg containerStyles="bg-hero_shape w-[510px] h-[462px] bg-no-repeat relative bg-bottom" imgSrc="/hero/hero-img.png"/> */}
                        <div className='w-[510px] h-[462px] bg-no-repeat relative bg-bottom'>
                            <Image src="/hero/hero-img.png" fill priority alt="Dev Image" />
                        </div>
                    </div>
                </div>
                {/* Icon */}
                <div className='hidden md:flex absolute left-2/4 bottom-44 xl:bottom-12 animate-bounce'>
                    <RiArrowDownSLine className='text-3xl text-primary' />
                </div>
            </div>
        </section>
    );
}
 
export default Hero;