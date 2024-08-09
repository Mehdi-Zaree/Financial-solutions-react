import React, {useState} from 'react';
import FeatureBox from "../../smallComponents/FeatureBox/index.jsx";
import TextBox from "../../smallComponents/TextBox/index.jsx";
import Button from "../../smallComponents/Button/index.jsx";
import {motion} from "framer-motion";
import{fadeUp} from "../../smallComponents/Variants.jsx";

function Index({setCursorScale}) {
    const opVariants =(index)=>{
       return{
           hidden:{
               scale:0.9,
               opacity:0,
           },
           visible:{
               scale:1,
               opacity:1,
               transition:{
                   delay:0.2*index,
                   duration:0.8,
                   type:'tween'
               }
           }
       }
    }
    const [planBox, setPlanBox] = useState([
        {
            id:0,
            Header: 'برنامه ریزی بازنشستگی',
            description : 'مشاوره به مشتریان در مورد استراتژی های سرمایه گذاری و مدیریت سبد سرمایه گذاری آنها برای کمک به حداکثر رساندن بازده.',
            Icon : 'fa-duotone fa-solid fa-hand-holding-dollar',
            iconColor:'text-[#AADFAA]'

        },
        {
            id:1,
            Header: 'برنامه ریزی مالیاتی',
            description : 'کمک به مشتریان برای به حداقل رساندن بدهی های مالیاتی خود و استفاده از استراتژی های سرمایه گذاری مالیاتی کارآمد.',
            Icon : 'fa-duotone fa-solid fa-coins',
            iconColor:'text-[#AADFAA]'

        },
        {
            id:2,
            Header: 'برنامه ریزی املاک',
            description : 'شناسایی و مدیریت ریسک های مالی بالقوه، مانند نوسانات بازار، تورم، و رویدادهای غیرمنتظره زندگی',
            Icon : 'fa-duotone fa-solid fa-building-columns',
            iconColor:'text-[#AADFAA]'

        },
    ]);
    return (
        <>
            <section className={'w-full lg:px-40  '}>
                <div className={'w-full flex flex-col items-center  '}>
                    <motion.div
                        variants={fadeUp('up', '0.3')}
                        initial="hidden"
                        whileInView={'visible'}
                        viewport={{once:true}}
                        className={'w-2/3  text-2xl md:text-3xl lg:text-4xl xl:text-6xl text-white *:mx-1 *:flex *:font-semibold flex flex-wrap justify-center md:px-28   items-center'}>
                        <span>برای</span>
                        <span>برنامه</span>
                        <span>ریزی</span>
                        <span>مالی</span>
                        <span className={'text-[#6DE894]'}>و</span>
                        <span className={'text-[#6DE894]'}>مدیریت</span>
                        <span className={'text-[#6DE894]'}>سرمایه</span>
                        <span>گذاری</span>
                        <span>با</span>
                        <span>ما</span>
                        <span>شریک</span>
                        <span>شوید</span>
                    </motion.div>
                </div>
                <div className={'w-full  h-full md:flex justify-center gap-4 my-8'}>
                    {planBox.map((val,index)=>{
                        return (
                        <motion.div
                            className={` my-6 md:w-1/3 w-full h-80 myBackdrop hover:outline hover:outline-[#6DE894] hover:outline-1 outline outline-1 duration-300 flex flex-col gap-3`}
                            key={val.id}
                            variants={opVariants(index)}
                            initial='hidden'
                            whileInView={'visible'}
                            viewport={{once: true}}
                        >
                            <figure className={'w-full  h-16 flex justify-center items-center'}>
                    <span
                        className={'w-12 h-12  rounded-md flex items-center justify-center text-4xl   ' + val.iconColor + ''}>
                        <i className={val.Icon}></i>
                    </span>
                            </figure>
                            <h3 className={'text-white w-full text-xl md:text-2xl xl:text-3xl font-semibold  text-center'}>{val.Header}</h3>
                            <p className={'text-[#CFCFCF] w-3/4  text-md md:text-lg lg:text-xl text-center pt-5 mx-auto'}>{val.description}</p>
                        </motion.div>
                        )
                    })}
                </div>
                <div
                    className={'w-full   border greenShadow my-10 rounded-2xl py-10 px-10 flex flex-col items-center justify-center  '}>
                    <motion.div
                        className={'w-full  flex flex-col items-center justify-center gap-10'}
                        variants={fadeUp('up','0.3')}
                        initial='hidden'
                        whileInView={'visible'}
                        viewport={{once:true}}

                    >
                        <motion.h2
                            className={'w-full lg:w-1/2 text-2xl md:text-4xl xl:text-5xl text-white text-center  font-semibold'}
                            variants={fadeUp('up','0.4')}
                        >وضعیت مالی خودتان را کنترل کنید</motion.h2>

                        <motion.p
                            variants={fadeUp('up','0.5')}
                            className={'w-full lg:w-1/2 text-xl md:text-2xl lg:text-2xl text-[#BCBCBE] text-center '}>در راه حل مالی ما، ما اینجا هستیم تا به شما کمک کنیم تا به اهداف مالی خود برسید و آینده مالی خود را کنترل کنید.</motion.p>
                        <motion.div
                            variants={fadeUp('up','0.6')}
                        >
                            <Button
                                text={'با ما تماس بگیرید'}
                                dimension={'w-52 h-16 md:w-72 md:h-20 bg-white  text-2xl md:text-3xl hover:bg-[#6BE591]  items-center'}
                                setCursorScale={setCursorScale}
                            />
                        </motion.div>
                    </motion.div>


                </div>
            </section>
        </>
    );
}

export default Index;