'use client'
import Link from 'next/link';
import { Button } from './ui/button';

// import swiper react components
import {Swiper, SwiperSlide} from 'swiper/react';

// import swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import {Pagination} from 'swiper/modules';

// components
import ProjectCard from './ProjectCard';

const ProjectData = [
    {
        image: '/work/3.png',
        category: 'react js',
        name: 'Nexa Website',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus, non.',
        link: '/',
        github: '/',
    },
    {
        image: '/work/4.png',
        category: 'react js',
        name: 'Solstice Website',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus, non.',
        link: '/',
        github: '/',
    },
    {
        image: '/work/2.png',
        category: 'react js',
        name: 'Evolve Website',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus, non.',
        link: '/',
        github: '/',
    },
    {
        image: '/work/1.png',
        category: 'next js',
        name: 'Ignite Website',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus, non.',
        link: '/',
        github: '/',
    },
    {
        image: '/work/3.png',
        category: 'next js',
        name: 'Envision Website',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus, non.',
        link: '/',
        github: '/',
    },
    {
        image: '/work/1.png',
        category: 'next js',
        name: 'Nova Website',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus, non.',
        link: '/',
        github: '/',
    },
    {
        image: '/work/4.png',
        category: 'fullstack',
        name: 'Zenith Website',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus, non.',
        link: '/',
        github: '/',
    },
    {
        image: '/work/2.png',
        category: 'fullstack',
        name: 'Nexa Website',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus, non.',
        link: '/',
        github: '/',
    },
];

const Work = ({blogPosts}) => {

    return (
        <section className='relative mb-12 xl:mb-48'>
            <div className='container mx-auto'>
                {/* text */}
                <div className=' max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items-center xl:items-start'>
                    <h2 className='section-title mb-4'>Latest Projects</h2>
                    <p className='subtitle mb-8'>Check out some of my latest projects</p>
                    <p className='subtitle mb-8 !text-red-600'>This portfolio is under construction, checkout my Github <Link href="https://github.com/thiagosullivan" target='_blank' rel="noopener noreferrer" className='font-bold text-xl underline'>HERE</Link></p>
                    <Link href="/projects"><Button>All Projects</Button></Link>
                </div>
                {/* slider */}
                <div className='xl:max-w-[1000px] xl:absolute right-0 top-0'>
                    <Swiper
                        className='h-[480px]'
                        slidesPerView={1}
                        breakpoints={{
                            640: {
                                slidesPerView: 2
                            },
                        }}
                        spaceBetween={30}
                        modules={[Pagination]}
                        pagination={{clickable: true}}
                    >
                        {/* show only the firsdt 4 projects for the slides */}
                        {/* {ProjectData.slice(0, 4).map((project, index) => {
                            return (
                                <SwiperSlide key={index}>
                                    <ProjectCard project={project} />
                                </SwiperSlide>
                            )
                        })} */}
                        {blogPosts.slice(0,3).map((project, index) => {
                            return (
                                <SwiperSlide key={index}>
                                    <ProjectCard project={project} />
                                </SwiperSlide>
                            )
                        })}
                    </Swiper>
                </div>
            </div>
        </section>
    );
}
 
export default Work;