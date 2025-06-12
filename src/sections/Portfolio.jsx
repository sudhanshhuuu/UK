import React from 'react';

import project1 from '../assets/project/1.png'
import project2 from '../assets/project/2.png'
import project3 from '../assets/project/3.png'
import project4 from '../assets/project/4.png'
import project5 from '../assets/project/5.png'
import project6 from '../assets/project/6.png'
import project7 from '../assets/project/7.png'
import project8 from '../assets/project/8.png'
import project9 from '../assets/project/9.png'
import project10 from '../assets/project/10.png'
// import project11 from '../assets/project/11.png'
import project12 from '../assets/project/12.png'
import project13 from '../assets/project/13.png'
// import project14 from '../assets/project/14.png'


import {motion} from 'framer-motion'
import { slideUpVariants , zoomInVariants } from './animation';

const Portfolio = () => {
    return (
        <div id='projects' className='w-full'>
            <motion.div
            initial="hidden"
            whileInView="visible"
            variants={slideUpVariants}
            className='lg:w-[80%] w-[90%] m-auto py-[60px] flex flex-col justify-between items-center gap-[20px]'

            >
                <motion.h3
                variants={slideUpVariants}
                className='text-yellow-500 text-2xl uppercase'
                >
                    portfolio
                </motion.h3>
                <motion.h2
                variants={slideUpVariants}
                className='uppercase text-white text-5xl font-bold text-center'
                >Our Best Projects</motion.h2>
                <motion.div
                variants={zoomInVariants}
                className='w-[120px] h-[6px] bg-yellow-500'
                >
                </motion.div>
                <motion.div
                initial='hidden'
                whileInView='visible'
                variants={zoomInVariants}
                className='w-full m-auto grid lg:grid-cols-4 grid-cols-1'
                >
                    <img src={project1} alt="" className='h-[250px] w-full'/>
                    <img src={project2} alt="" className='h-[250px] w-full'/>
                    <img src={project3} alt="" className='h-[250px] w-full'/>
                    <img src={project4} alt="" className='h-[250px] w-full'/>
                    <img src={project5} alt="" className='h-[250px] w-full'/>
                    <img src={project6} alt="" className='h-[250px] w-full'/>
                    <img src={project7} alt="" className='h-[250px] w-full'/>
                    <img src={project8} alt="" className='h-[250px] w-full'/>
                    <img src={project9} alt="" className='h-[250px] w-full'/>
                    <img src={project10} alt="" className='h-[250px] w-full'/>
                    {/* <img src={project11} alt="" className='h-[250px] w-full'/> */}
                    <img src={project12} alt="" className='h-[250px] w-full'/>
                    <img src={project13} alt="" className='h-[250px] w-full'/>
                </motion.div>

            </motion.div>
            
        </div>
    );
};

export default Portfolio;