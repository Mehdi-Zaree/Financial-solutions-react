import React from 'react';
import HeroBox from "../../smallComponents/HeroBox/index.jsx";
import {motion} from "framer-motion";
import {fadeUp} from "../../smallComponents/Variants.jsx";
import ImageBox from "../../smallComponents/ImageBox/index.jsx";

function Index({setCursorScale}) {
    const greenShadowVariants = {
        hidden:{
            opacity:0,
        },
        visible:{
            opacity:1,
            transition:{
                type: 'tween',
                ease:[0, 0.71, 0.2,1.01],
                duration:2,
                delay:.4
            }
        }
    }
    return (
        <section className={'xl:w-[80%] w-full mx-auto my-20 '}>
        <HeroBox style={'w-full  mx-auto  bg-gradient-to-t from-lime-100 to-green-300 md:flex p-5 md:p-20 '}
                 headerText={"امروز موفقیت مالی خود را تقویت کنید."}
                 paragraphText={"تیم متخصص ما سال ها تجربه در این صنعت دارد و به ارائه راه حل های متناسب با نیازهای منحصر به فرد شما اختصاص دارد."}
                 setCursorScale={setCursorScale}
        />
        <div className={'w-full  my-12 md:flex items-center justify-between gap-5  '}>
            <motion.div
                className={'w-full h-[400px] md:w-1/2 flex flex-col justify-evenly rounded-2xl px-4 py-2 gap-8 my-10 greenShadow '}
                variants={greenShadowVariants}
                initial="hidden"
                whileInView={'visible'}
                viewport={{once:true}}
            >
                <div className={'w-full  flex flex-col gap-2 '}>
                    <motion.h2
                        className={'w-full my-3 text-2xl md:text-3xl  text-white text-center '}
                        variants={fadeUp('right','0.5')}
                        initial="hidden"
                        whileInView={'visible'}
                        viewport={{once:true}}
                    >برنامه ریزی مالیاتی
                    </motion.h2>
                    <motion.p
                        className={'w-[90%] mx-auto text-xl md:text-xl lg:text-2xl text-[#c8c9c9] text-center '}
                        variants={fadeUp('up','0.6')}
                        initial="hidden"
                        whileInView={'visible'}
                        viewport={{once:true}}
                    >کمک به
                        مشتریان برای به حداقل رساندن بدهی های مالیاتی خود و استفاده از استراتژی های سرمایه گذاری مالیاتی
                        کارآمد.
                    </motion.p>
                </div>
                <ImageBox
                    mainDivStyle={'w-full mx-auto flex justify-center gap-1 '}
                    imgSrc1={'https://outgrid.uicore.co/financial-solution/wp-content/uploads/sites/8/2023/06/Financial-Solution-Tax-Image-2.webp'}
                    imgSrc2={'https://outgrid.uicore.co/financial-solution/wp-content/uploads/sites/8/2023/06/Financial-Solution-Tax-Image-1.webp'}
                    imgStyle1={' w-[200px] rounded-xl'}
                    imgStyle2={' w-[200px] rounded-xl'}
                />

            </motion.div>
            <motion.div
                className={'w-full  h-[400px] md:w-1/2 flex flex-col justify-evenly rounded-2xl px-2 py-3 gap-8 my-10 greenShadow '}
                variants={greenShadowVariants}
                initial="hidden"
                whileInView={'visible'}
                viewport={{once:true}}
            >
                <div className={'w-full  flex flex-col gap-2 '}>
                    <motion.h2
                        className={'w-full my-3 text-2xl md:text-3xl  text-white text-center '}
                        variants={fadeUp('right','0.5')}
                        viewport={{once:true}}
                    >
                        مدیریت ریسک پذیری
                    </motion.h2>
                    <motion.p
                        className={'w-[90%] mx-auto text-xl md:text-xl lg:text-2xl text-[#c8c9c9] text-center'}
                        variants={fadeUp('up','0.6')}
                        viewport={{once:true}}

                    >کمک به
                        مشتریان برای به حداقل رساندن بدهی های مالیاتی خود و استفاده از استراتژی های سرمایه گذاری مالیاتی کارآمد.
                    </motion.p>
                </div>
                <ImageBox
                    mainDivStyle={'w-full  flex mx-auto justify-center gap-1   '}
                    imgSrc1={'https://outgrid.uicore.co/financial-solution/wp-content/uploads/sites/8/2023/06/Financial-Solution-Risk-Image-1.webp'}
                    imgSrc2={'https://outgrid.uicore.co/financial-solution/wp-content/uploads/sites/8/2023/06/Financial-Solution-Risk-Image-2.webp'}
                    imgStyle1={'w-[100px]  rounded-md object-cover'}
                    imgStyle2={'w-[200px]  rounded-md object-cover'}
                />
            </motion.div>

        </div>
        </section>
    );
}

export default Index;