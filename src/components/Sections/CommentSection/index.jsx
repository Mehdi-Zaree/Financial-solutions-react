import React from 'react';
import {motion} from "framer-motion";
import {fadeUp} from "../../smallComponents/Variants.jsx";

function Index(props) {
    const [comments, setComments] = React.useState([
        {
            id: 0,
            name:'جیدون باتور',
            job:'مدیر عامل در استارتاپ',
            comment:'"من چندین سال است که مشتری هستم و از سطح خدمات و توجه به جزئیات ارائه شده توسط تیم در راه حل مالی ما بسیار خوشحال هستم."',
            avatar:'https://outgrid.uicore.co/financial-solution/wp-content/uploads/sites/8/2023/06/Financial-Solution-Testimonial-Image-2.webp',
        },
        {
            id: 1,
            name:'پیتین دورارت',
            job:'موسس در آژانس',
            comment:'به لطف راه حل مالی ما، توانستم به راحتی بازنشسته شوم و از سال های طلایی خود لذت ببرم بدون اینکه نگران پول باشم.',
            avatar:'https://outgrid.uicore.co/financial-solution/wp-content/uploads/sites/8/2023/06/Financial-Solution-Testimonial-Image-1.webp',
        },
        {
            id: 2,
            name:'کوری کورسگارد',
            job:'مدیر عامل در استارتاپ',
            comment:'به لطف راه حل مالی ما، توانستم به راحتی بازنشسته شوم و از سال های طلایی خود لذت ببرم بدون اینکه نگران پول باشم.',
            avatar:'https://outgrid.uicore.co/financial-solution/wp-content/uploads/sites/8/2023/06/Financial-Solution-Testimonial-Image-4.webp',
        },{
            id: 3,
            name:'جیمز مانگو',
            job:'مدیر عامل در استارتاپ',
            comment:'به لطف راه حل مالی ما، توانستم به راحتی بازنشسته شوم و از سال های طلایی خود لذت ببرم بدون اینکه نگران پول باشم.',
            avatar:'https://outgrid.uicore.co/financial-solution/wp-content/uploads/sites/8/2023/06/Financial-Solution-Testimonial-Image-3.webp',
        },{
            id: 4,
            name:'آسپن جورج',
            job:'موسس در آژانس',
            comment:'به لطف راه حل مالی ما، توانستم به راحتی بازنشسته شوم و از سال های طلایی خود لذت ببرم بدون اینکه نگران پول باشم.',
            avatar:'https://outgrid.uicore.co/financial-solution/wp-content/uploads/sites/8/2023/06/Financial-Solution-Testimonial-Image-5.webp',
        },{
            id: 5,
            name:'کوری سیفرون',
            job:'مدیر عامل در استارتاپ',
            comment:'به لطف راه حل مالی ما، توانستم به راحتی بازنشسته شوم و از سال های طلایی خود لذت ببرم بدون اینکه نگران پول باشم.',
            avatar:'https://outgrid.uicore.co/financial-solution/wp-content/uploads/sites/8/2023/06/Financial-Solution-Testimonial-Image-6.webp',
        },

    ]);
    return (
       <>
           <section>

               <motion.div
                   className={'w-full   flex flex-col gap-5 my-20'}
                   variants={fadeUp('up','.4')}
                   initial='hidden'
                   whileInView={'visible'}
                   viewport={{once:true}}
               >
                   <h2 className={'w-full text-2xl md:text-3xl  lg:text-6xl text-white font-bold text-center'}>آنچه مشتریان به ما می گویند</h2>
                   <p className={'md:w-1/3 w-full mx-auto  text-lg md:text-xl  lg:text-2xl text-[#BCBCBE] text-center '}>فقط حرف ما را قبول نکنید. در اینجا برخی از مشتریان راضی ما در مورد راه حل های مالی ما می گویند.</p>
               </motion.div>
               <motion.div
                   className={'w-full  *:myBorderRadius  lg:grid md:grid-cols-2 lg:grid-cols-3 justify-center gap-5 *:rounded-2xl mt-20 '}
                    variants={fadeUp('up','0.6')}
                   initial='hidden'
                   whileInView={'visible'}
                   viewport={{once:true}}
               >

                   {comments.map((comment, index) => {
                       return (
                           <div className={`w-full h-72 p-5 opacity-50 my-5`} key={comment.id}>
                               <div className={'w-full h-1/2'}>
                                   <figure className={'w-12 h-12 rounded-full overflow-hidden'}>
                                       <img src={comment.avatar} alt="" className={'w-full h-full object-cover'}/>
                                   </figure>
                                   <h2 className={'text-white'}>{comment.name}</h2>
                                   <h3 className={'text-[#BCBCBE]'}>{comment.job}</h3>
                               </div>
                               <p className={'text-white text-xl'}>{comment.comment}</p>
                           </div>
                       )
                   })}

               </motion.div>
           </section>
       </>
    );
}

export default Index;