import React from 'react';
import HeroImage from '../../../assets/HeroImage.webp'
import Button from "../../smallComponents/Button/index.jsx";
import Figures from "../../smallComponents/Figures/index.jsx";
import {motion} from "framer-motion";
import {fadeUp} from "../../smallComponents/Variants.jsx";

function Hero({setCursorScale}) {
    return (
        <section className={'w-full  lg:flex'}>
            <HeroContent setCursorScale={setCursorScale} />
            <BgImage HeroImage={HeroImage}/>
        </section>
    );
}
function BgImage({HeroImage}){
    return(
        <>
            <motion.div
                className={' h-full xl:w-full  2xl:w-1/2  flex justify-end'}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3,  }}
                // viewport={{once:true}}
            >
                <figure className={'2xl:w-full 2xl:h-full w-3/4 h-3/4  '}>
                    <img className={'w-full h-full object-cover '} src={HeroImage} alt=""/>
                </figure>
            </motion.div>
        </>
    )
}
function HeroContent({setCursorScale}){
    return(
        <>
            <article className={'xl:w-full  2xl:w-1/2  lg:justify-start pt-12 lg:pt-28 px-2 flex flex-col'}>
                {/*first big text*/}
                <motion.div
                    className={'w-full flex justify-center lg:justify-start  text-white text-2xl md:text-4xl xl:text-6xl flex-wrap'}
                    variants={fadeUp('left', '0.3')}
                    initial='hidden'
                    whileInView={'visible'}
                    viewport={{once: true}}
                >
                    <div className={'flex'}>
                        <h2 className={' w-fit '}>
                            با راهنمایی
                        </h2>
                        <span className={'text-[#6ee692]  w-fit   '}>
                        کارشناسان ما
                    </span>
                    </div>
                    {/*second big text*/}
                    <div
                        className={'w-full   text-center justify-center lg:justify-start flex  text-white mb-5 text-3xl md:text-4xl xl:text-6xl'}>
                        <h2>آینده مالی خود را تضمین کنید</h2>
                    </div>
                </motion.div>



                <motion.div
                    variants={fadeUp('up', '0.5')}
                    initial='hidden'
                    whileInView={'visible'}
                    viewport={{once: true}}
                >
                    <div
                        className={'lg:w-[80%] w-[60%]  text-center  lg:text-start  mx-auto lg:mx-0  text-xl lg:text-2xl text-[#CFCFCF]'}>
                        {/*paragraph*/}
                        <p className={''}>
                            چه به دنبال پس‌انداز برای دوران بازنشستگی، سرمایه‌گذاری در بازار سهام یا برنامه‌ریزی برای
                            تحصیل
                            فرزندتان باشید، ما شما را تحت پوشش قرار می‌دهیم.
                        </p>
                    </div>
                    {/*buttons*/}
                    <div className={'w-full  h-24 flex items-center justify-center lg:justify-start px-3 gap-3 mt-2'}>
                        <Button
                            text={'رایگان شروع کنید'}
                            dimension={"w-32 lg:w-64 h-16 bg-[#6ee692] text-black hover:bg-[#6ee692] items-center hover:text-black"}
                            setCursorScale={setCursorScale}
                        />
                        <Button
                            text={'مشاهده دمو'}
                            dimension={'w-32 lg:w-64 h-16 bg-[#6EE6923D] text-[#6ee692] hover:bg-[#6ee692] items-center hover:text-black outline outline-1'}
                            icon={'fa-solid fa-angle-left'}
                            iconColor={'text-white'}
                            setCursorScale={setCursorScale}
                        />

                    </div>
                    {/*figures*/}
                    <div className={'w-full h-24 flex items-center justify-center lg:justify-start  gap-3'}>
                        <Figures name={'کاربر فعال'} figures={`${10}K+`}/>
                        <Figures name={'کل معاملات'} figures={`${340}M$`}/>
                        <Figures name={'کشورها'} figures={`${112}+`}/>
                    </div>
                </motion.div>
            </article>
        </>
    )
}

export default Hero;