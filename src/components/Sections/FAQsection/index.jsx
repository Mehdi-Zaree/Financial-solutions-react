import React, {useState} from 'react';
import AccordionMenu from "../../smallComponents/AccordionMenu/index.jsx";
import {motion} from "framer-motion";
import {fadeUp} from "../../smallComponents/Variants.jsx";

function Index({setCursorScale}) {
    const [data,setData] = useState([
        {
            Question : 'برنامه ریزی مالی چیست و چرا اهمیت دارد؟',
            Answer : 'ردیابی درآمد و هزینه های خود: با برنامه ما، می توانید به راحتی درآمد و هزینه های خود را ردیابی کنید، بنابراین همیشه می دانید پول خود به کجا می رود.'
        },
        {
            Question : 'چگونه بفهمم که نیاز به برنامه ریزی مالی دارم؟',
            Answer : 'ردیابی درآمد و هزینه های خود: با برنامه ما، می توانید به راحتی درآمد و هزینه های خود را ردیابی کنید، بنابراین همیشه می دانید پول خود به کجا می رود.'
        },
        {
            Question : 'چه نوع گزینه های سرمایه گذاری را پیشنهاد می کنید؟',
            Answer : 'ردیابی درآمد و هزینه های خود: با برنامه ما، می توانید به راحتی درآمد و هزینه های خود را ردیابی کنید، بنابراین همیشه می دانید پول خود به کجا می رود.'
        },
        {
            Question : 'چگونه راه حل های مالی شما را شروع کنم؟',
            Answer : 'ردیابی درآمد و هزینه های خود: با برنامه ما، می توانید به راحتی درآمد و هزینه های خود را ردیابی کنید، بنابراین همیشه می دانید پول خود به کجا می رود.'
        },
    ]);

    return (
        <>
            <section className={'w-full mt-20 lg:flex px-2 lg:px-40  '}>
                <motion.div
                    className={'w-full lg:w-1/2     mt-5  '}
                    variants={fadeUp('up', '0.4')}
                    initial="hidden"
                    whileInView={'visible'}
                    viewport={{once:true}}
                >
                    <h3 className={'w-full text-xl md:text-2xl text-slate-100 font-bold text-center lg:text-start '}>
                        سوالات متداول درباره اوتگرید
                    </h3>
                    <p className={'w-full text-lg md:text-xl text-[#CDCDCD]  text-center lg:text-start my-5'}>
                        در اینجا برخی از سوالات متداول ما در مورد راه حل های مالی دریافت می کنیم
                    </p>
                </motion.div>
                <motion.div
                    className={'w-full lg:w-1/2'}
                    variants={fadeUp('up', '0.5')}
                    initial="hidden"
                    whileInView={'visible'}
                    viewport={{once:true}}

                >
                    <AccordionMenu Data={data} setData={setData} setCursorScale={setCursorScale}/>
                </motion.div>
            </section>
        </>
    );
}

export default Index;