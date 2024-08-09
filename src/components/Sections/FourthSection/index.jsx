import React from 'react';
import TextBox from "../../smallComponents/TextBox/index.jsx";
import Button from "../../smallComponents/Button/index.jsx";
import ImageBox from "../../smallComponents/ImageBox/index.jsx";
import {motion} from "framer-motion";
import {fadeUp} from "../../smallComponents/Variants.jsx";


function Index({setCursorScale}) {

    return (
        <>
            <section className={'w-full  mt-32 *:gap-14 *:my-40 mx-auto  lg:px-40 px-10  '}>
                <div className={'w-full  flex flex-col md:flex-row items-center '}>
                    <div className={' h-full w-full md:w-1/2'}>

                        <motion.div
                            className={'w-full  flex flex-col gap-5 '}
                            variants={fadeUp('up', '0.5')}
                            initial="hidden"
                            whileInView={'visible'}
                            viewport={{once: true}}
                        >
                            <h2
                                className={'w-full lg:w-[80%] my-3 text-2xl md:text-2xl lg:text-5xl  text-white font-bold'}>
                                به ما کمک کنید تا در دنیای پیچیده مالی حرکت کنید
                            </h2>
                            <motion.p
                                className={'w-full lg:w-[80%] my-3 text-md md:text-md lg:text-xl  text-[#c8c9c9]'}
                                variants={fadeUp('up', '0.6')}
                            >
                                ما با شما کار می کنیم تا برنامه های مالی سفارشی متناسب با اهداف فردی و تحمل ریسک شما
                                ایجاد کنیم
                            </motion.p>
                            <motion.p
                                className={'w-full lg:w-[80%] my-3 text-md md:text-md lg:text-xl  text-[#c8c9c9]'}
                                variants={fadeUp('up', '0.7')}
                            >
                                خدمات ما شامل برنامه ریزی بازنشستگی، مدیریت سرمایه گذاری، برنامه ریزی مالیاتی، برنامه
                                ریزی املاک و مدیریت ریسک است.
                            </motion.p>
                            <motion.div
                                className={'mt-5'}
                                variants={fadeUp('up', '0.8')}

                            >
                                <Button
                                    text={'بیشتر بدانید'}
                                    dimension={'w-36 h-12 flex items-center justify-center bg-[#1847219B] bg-[#6EE6921E] text-[#6ee692] hover:bg-[#6ee692] hover:text-black outline outline-1 '}
                                    setCursorScale={setCursorScale}
                                />
                            </motion.div>
                        </motion.div>

                    </div>
                    <div className={'myBackdrop rounded-xl w-full md:w-[45%] h-64 lg:h-96'}>
                        <ImageBox
                            mainDivStyle={'relative '}
                            imgSrc1={'https://outgrid.uicore.co/financial-solution/wp-content/uploads/sites/8/2023/06/Financial-Solution-Navigate-Image-1.webp'}
                            imgSrc2={'https://outgrid.uicore.co/financial-solution/wp-content/uploads/sites/8/2023/06/Financial-Solution-Navigate-Image-2.webp'}
                            imgStyle1={'w-56 h-36 md:h-52 md:w-[300px] rounded-lg  absolute -left-5 top-10 md:top-8 md:-left-10'}
                        imgStyle2={'w-32 h-36 md:h-52 md:w-48 rounded-lg object-cover absolute left-14 top-28 md:left-5 md:top-32 shadow '}
                        />
                    </div>
                </div>
                <div dir={'ltr'} className={'w-full flex flex-col md:flex-row items-center   '}>
                    <div className={' h-full w-full md:w-1/2 flex flex-col items-end px-3'}>
                        <motion.div
                            className={'w-full  flex flex-col gap-5  items-end *:text-end'}
                            variants={fadeUp('up', '0.5')}
                            initial="hidden"
                            whileInView={'visible'}
                            viewport={{once: true}}
                        >
                            <h2
                                className={'w-full lg:w-[80%] my-3 text-2xl md:text-2xl lg:text-5xl  text-white font-bold'}>
                                پتانسیل مالی شما با راهکارهای تخصصی ما
                            </h2>
                            <motion.p
                                className={'w-full   my-3 text-md md:text-md lg:text-xl  text-[#c8c9c9]'}
                                variants={fadeUp('up', '0.6')}
                            >
                                خدمات برنامه ریزی بازنشستگی ما برای کمک به شما در پس انداز و مدیریت وجوه بازنشستگی طراحی شده است تا بتوانید از سال های طلایی خود بدون نگرانی در مورد پول لذت ببرید.
                            </motion.p>

                            <motion.div
                                className={'mt-5'}
                                variants={fadeUp('up', '0.8')}

                            >
                                <Button
                                    text={'بیشتر بدانید'}
                                    dimension={'w-36 h-12 flex items-center justify-center bg-[#1847219B] bg-[#6EE6921E] text-[#6ee692] hover:bg-[#6ee692] hover:text-black outline outline-1 '}
                                    setCursorScale={setCursorScale}
                                />
                            </motion.div>
                        </motion.div>
                    </div>
                    <div className={'myBackdrop rounded-xl w-full md:w-[45%] h-64  lg:h-96  '}>
                        <ImageBox
                            mainDivStyle={'relative '}
                            imgSrc1={'https://outgrid.uicore.co/financial-solution/wp-content/uploads/sites/8/2023/06/Financial-Solution-Financial-Image-1.webp'}
                            imgSrc2={'https://outgrid.uicore.co/financial-solution/wp-content/uploads/sites/8/2023/06/Financial-Solution-Financial-Image-2.webp'}
                            imgStyle1={'w-56 h-36 md:h-32 md:w-[200px] lg:w-[400px] lg:h-64 rounded-lg  absolute right-2 top-10 lg:top-5 lg:-right-10'}
                            imgStyle2={'w-32 h-36 md:h-40 md:w-[200px] lg:w-[300px] lg:h-64 rounded-lg  absolute left-5 top-20 md:left-28 lg:left-70 md:top-32  shadow '}
                        />
                    </div>
                </div>
                <div className={'w-full  flex flex-col md:flex-row items-center '}>
                    <div className={' h-full w-full md:w-1/2'}>
                        <motion.div
                            className={'w-full  flex flex-col gap-5 '}
                            variants={fadeUp('up', '0.5')}
                            initial="hidden"
                            whileInView={'visible'}
                            viewport={{once: true}}
                        >
                            <h2
                                className={'w-full lg:w-[80%] my-3 text-2xl md:text-2xl lg:text-5xl  text-white font-bold'}>
                                اعتماد به نفسی را که با یک برنامه مالی جامد همراه است، تجربه کنید
                            </h2>
                            <motion.p
                                className={'w-full lg:w-[80%] my-3 text-md md:text-md lg:text-xl  text-[#c8c9c9]'}
                                variants={fadeUp('up', '0.6')}
                            >
                                خدمات ما شامل برنامه ریزی بازنشستگی، مدیریت سرمایه گذاری، برنامه ریزی مالیاتی، برنامه ریزی املاک و غیره است.
                            </motion.p>

                            <motion.div
                                className={'mt-5'}
                                variants={fadeUp('up', '0.8')}

                            >
                                <Button
                                    text={'بیشتر بدانید'}
                                    dimension={'w-36 h-12 flex items-center justify-center bg-[#1847219B] bg-[#6EE6921E] text-[#6ee692] hover:bg-[#6ee692] hover:text-black outline outline-1 '}
                                    setCursorScale={setCursorScale}
                                />
                            </motion.div>
                        </motion.div>
                    </div>
                    <div className={'myBackdrop rounded-xl w-full  md:w-[45%] h-64 lg:h-96'}>
                        <ImageBox
                            mainDivStyle={'relative '}
                            imgSrc1={'https://outgrid.uicore.co/financial-solution/wp-content/uploads/sites/8/2023/06/Financial-Solution-Experience-Image-1.webp'}
                            imgSrc2={'https://outgrid.uicore.co/financial-solution/wp-content/uploads/sites/8/2023/06/Financial-Solution-Experience-Image-2.webp'}
                            imgStyle1={'w-[300px] md:w-[250px] h-48 md:h-48 lg:w-[500px] lg:h-80 rounded-lg  absolute left-5 top-5 lg:-left-10 lg:-top-10  '}
                            imgStyle2={'w-40 h-32 md:h-40 lg:h-64 lg:w-[350px] rounded-lg absolute left-40 top-32 md:-right-0 md:top-32 lg:-right-10 lg:top-40 shadow '}
                        />
                    </div>
                </div>

            </section>
        </>
    );
}

export default Index;