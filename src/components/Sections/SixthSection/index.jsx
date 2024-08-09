import React from 'react';
import Button from "../../smallComponents/Button/index.jsx";
import ImageBox from "../../smallComponents/ImageBox/index.jsx";
import {motion} from "framer-motion";
import {fadeUp} from "../../smallComponents/Variants.jsx";

function Index({setCursorScale}) {
    return (
        <>
            <section className={'w-full my-20  lg:px-40  '}>
                <div className={'w-full greenShadow   rounded-xl flex flex-col md:flex-row justify-between   '}>
                    <article className={'w-full lg:w-1/2 p-5 lg:p-14  '}>
                        <motion.h3
                            className={'w-full text-2xl md:text-3xl  lg:text-4xl text-center md:text-start font-bold  text-slate-50'}
                            variants={fadeUp('left','0.4')}
                            initial='hidden'
                            whileInView={'visible'}
                            viewport={{once: true}}
                        >وضعیت مالی خودتان را امروز کنترل کنید</motion.h3>
                        <motion.div
                        variants={fadeUp('up','0.6')}
                        initial='hidden'
                        whileInView={'visible'}
                        viewport={{once: true}}

                        >
                            <p className={'w-full text-xl  text-center text-[#CDCDCD] mt-5 md:text-start'}>در راه حل
                                مالی ما، ما اینجا هستیم تا به شما کمک کنیم تا به اهداف مالی خود برسید و آینده مالی خود
                                را کنترل کنید.</p>
                            <Button
                                text={'شروع کنید!'}
                                dimension={'w-32 lg:w-40 h-12 lg:h-14 bg-white flex items-center hover:bg-[#6ee692] mx-auto md:mx-0 mt-10 '}
                                setCursorScale={setCursorScale}
                            />
                        </motion.div>
                    </article>
                    <motion.div
                        className={'w-full lg:w-1/2 h-full overflow-hidden rounded-lg'}
                        variants={fadeUp('right','0.4')}
                        initial='hidden'
                        whileInView={'visible'}
                        viewport={{once: true}}
                    >
                        <ImageBox
                            mainDivStyle={'w-full  h-72 lg:h-[400px]    relative'}
                            imgSrc1={'https://outgrid.uicore.co/financial-solution/wp-content/uploads/sites/8/2023/06/Financial-Solution-CTA-Image-2.webp'}
                            imgSrc2={'https://outgrid.uicore.co/financial-solution/wp-content/uploads/sites/8/2023/06/Financial-Solution-CTA-Image-1.webp'}
                            imgStyle1={' w-72 lg:w-[90%] h-64 lg:h-[90%]  absolute bottom-0 -right-5 rounded-tl-lg '}
                            imgStyle2={'w-32 h-32 absolute bottom-10 right-10 shadow-2xl rounded-lg'}
                        />
                    </motion.div>

                </div>
            </section>
        </>
    );
}

export default Index;