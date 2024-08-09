import React from 'react';
import {motion} from 'framer-motion';
import {fadeUp} from "../Variants.jsx";


function Index({ mainStyle,Icon,iconColor,Header,Description,id}) {
    return (
        <>
            <motion.div
                className={` my-6 ${mainStyle}  duration-300 flex flex-col gap-3`}
                variants={fadeUp('up', `${0.2*id}`)}
                initial='hidden'
                whileInView={'visible'}
                viewport={{once: true}}
            >
                <figure className={'w-full  h-16 flex justify-center items-center'}>
                    <span className={'w-12 h-12  rounded-md flex items-center justify-center text-4xl   '+iconColor+''}>
                        <i className={Icon}></i>
                    </span>
                </figure>
                <h3 className={'text-white w-full text-xl md:text-2xl xl:text-3xl font-semibold  text-center'}>{Header}</h3>
                <p className={'text-[#CFCFCF] w-3/4  text-md md:text-lg lg:text-xl text-center pt-5 mx-auto'}>{Description}</p>
            </motion.div>
        </>
    );
}

export default Index;