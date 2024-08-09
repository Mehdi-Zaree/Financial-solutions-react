import React from 'react';
import Button from "../Button/index.jsx";
import ImageBox from "../ImageBox/index.jsx";
import {motion} from "framer-motion";
import {fadeUp} from "../Variants.jsx";

function Index({style,headerText,paragraphText,setCursorScale}) {
    return (
        <>
            <div className={''+style+' rounded-2xl  '}>
                <div className={'w-full md:w-1/2 flex flex-col gap-5 '}>

                    <div className={'w-full  flex flex-col gap-6  border-black'}>
                        <motion.h2
                            className={'w-full text-3xl md:text-4xl lg:text-5xl font-bold overflow-hidden'}
                            variants={fadeUp('left','0.4')}
                            initial='hidden'
                            whileInView={'visible'}
                            viewport={{once: true}}
                        >{headerText}
                        </motion.h2>
                        <motion.div
                            className={'flex flex-col gap-3'}
                            variants={fadeUp('up','0.5')}
                            initial='hidden'
                            whileInView={'visible'}
                            viewport={{once: true}}
                        >
                            <motion.p
                                className={'w-[75%] text-xl lg:text-xl font-normal'}>
                                {paragraphText}
                            </motion.p>
                            <Button text={"بیشتر بدانید"} icon={"fa-duotone fa-solid fa-arrow-left"}
                                    dimension={'w-32 md:w-52 h-12 bg-transparent hover:text-[#6ee692]'}
                                    iconColor={'text-black'}
                                    setCursorScale={setCursorScale}
                            />
                        </motion.div>
                    </div>

                </div>
                <ImageBox mainDivStyle={'w-full md:w-1/2 h-52 md:h-72 relative'}
                          imgSrc1={"https://outgrid.uicore.co/financial-solution/wp-content/uploads/sites/8/2023/06/Financial-Solution-Emplowering-Image-1.webp"}
                          imgSrc2={'https://outgrid.uicore.co/financial-solution/wp-content/uploads/sites/8/2023/06/Financial-Solution-Emplowering-Image-2.webp'}
                          imgStyle1={'w-52 sm:w-72 md:w-80  object-cover absolute left-0 bottom-0 rounded-xl '}
                          imgStyle2={'w-32 sm:w-52 md:w-56 object-cover rounded-xl absolute left-0 bottom-16 shadow-xl'}
                />
            </div>
        </>
    );
}
// 'w-full text-3xl md:text-4xl lg:text-5xl font-bold' hstyle
// ' w-[75%] text-xl lg:text-2xl font-normal' pstyle
// 'w-full md:w-1/2 flex flex-col gap-6 ' divStyle

export default Index;