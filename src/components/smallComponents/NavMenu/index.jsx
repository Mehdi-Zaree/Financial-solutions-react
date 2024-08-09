import React, {useState} from 'react';
import {AnimatePresence, motion} from "framer-motion";
import NavButton from "../NavButton/index.jsx";
import Button from "../Button/index.jsx";
function NavMenu({setCursorScale,menuActive,MenuHandler,}) {
    const [menuData,setMenuData] = useState([
        {
            title:'صفحه اصلی'
        },
        {
            title: 'راه حل ها'
        },
        {
            title:'قیمت گذاری'
        },
        {
            title:'تماس با ما'
        }
    ])

    const menuVariants = {
        hidden: {
            x :'-100%',
            transition:{
                ease:[0.76,0,0.24,1],
                duration: '.8'
            }
        },
        visible:{
            x:0,
            display:'block',
            transition:{
                ease:[0.76,0,0.24,1],
                duration: '.8'
            }
        },
        listHidden:{
            x:'-100vw',
            transition:{
                duration:.5,
                delay : .5,
                type:'tween',
            }
        },
        listVisible:{
            x:0,
        }
    }

    return (
        <>
            <motion.div
                className={`lg:w-1/4 w-full  h-screen fixed  top-0 left-0 z-10 cursor-none bg-[#133] ${menuActive?'block':'hidden'} `}
                dir={'rtl'}
                variants={menuVariants}
                animate={menuActive?'visible':'hidden'}
                exit='hidden'

            >
                {/*top container*/}
                <div className={'w-full flex justify-between items-center sm:mb-5 p-2 sm:p-3'}>
                    {/*nav button*/}
                    <NavButton setCursorScale={setCursorScale} menuActive={menuActive} menuHandler={MenuHandler} />
                    {/*nav button*/}
                    {/*outGrid icon*/}
                    <figure className={'w-[100px] '}>
                        <img className={'md:mx-auto  h-8 '}
                             src="https://outgrid.uicore.co/financial-solutions/wp-content/uploads/sites/8/2023/11/Logo-Outgrid.webp"
                             alt=""/>
                    </figure>
                </div>
                {/*menu list*/}
                <motion.ul
                    className={'w-full h-auto  sm:p-5 px-5 py-2 *:text-lg sm:*:text-3xl *:text-slate-50 *:duration-300  *:hover:text-gray-500 duration-300'}
                >
                    {menuData.map((item,index)=>{
                        return <motion.li
                            key={index}
                            className={'hover:!text-gray-50'}
                            variants={menuVariants}
                            initial={'listHidden'}
                            animate={menuActive?'listVisible':''}
                            transition={{
                                duration:.3,
                                delay : index*.04,
                                type:'spring',
                            }}
                        >
                            <a href="">{item.title}</a>
                        </motion.li>
                    })}


                </motion.ul>
                <div className={'w-full   absolute bottom-0'}>
                    <motion.div
                        className={'w-full flex flex-col justify-center md:items-center items-start gap-1 px-5'}
                        variants={menuVariants}
                        animate={menuActive?'listVisible':'listHidden'}
                        transition={{
                            duration:.5,
                            delay : .3,
                            type:'tween',
                        }}
                    >
                        <h4 className={'text-slate-50 text-lg sm:text-xl'}>در تماس باشید</h4>
                        <h3 className={'text-lg sm:text-xl text-[#ADADAD]'}><a href="mailto:mahdizarei22019@gmail.com">Mahdizarei22019@gmail.com</a></h3>
                        <h3 className={'text-lg sm:text-xl text-[#ADADAD]'}>936-633-4236-(98)+</h3>
                    </motion.div>
                    <motion.div
                        className={'w-full flex flex-col justify-center items-start md:items-center gap-1 px-5 py-4'}
                        variants={menuVariants}
                        animate={menuActive?'listVisible':'listHidden'}
                        transition={{
                            duration:.5,
                            delay : .5,
                            type:'tween',
                        }}
                    >
                        <h4 className={'text-slate-50 text-xl sm:text-2xl'}>مرا دنبال کنید</h4>
                        <div className={'w-full  *:text-[#ADADAD] *:text-3xl flex justify-start md:justify-center gap-3  '}>
                            <a href="">
                                <i className="fa-brands fa-instagram hover:text-[#e1306c] duration-300"></i>
                            </a>
                            <a href="">
                                <i className="fa-brands fa-github hover:text-[#6e5494] duration-300"></i>
                            </a>
                            <a href="">
                                <i className="fa-brands fa-telegram hover:text-[#24A1DE] duration-300"></i>
                            </a>
                            <a href="">
                                <i className="fa-brands fa-linkedin hover:text-[#0077B5] duration-300"></i>
                            </a>
                        </div>
                        <Button
                            text={'مشاوره'}
                            dimension={'w-full h-12 lg:w-32 lg:h-12 bg-[#6EE6921E] text-[#6ee692] hover:bg-[#6ee692] hover:text-black items-center outline outline-1 mt-3 '}
                            setCursorScale={setCursorScale}
                        />
                    </motion.div>
                </div>
                <AnimatePresence mode={'wait'}>
                    <NavCurve menuActive={menuActive}/>
                </AnimatePresence>
            </motion.div>
        </>
    );
}
function NavCurve({menuActive}){
    const initialPath = `M 100 0 L100 ${window.innerHeight} Q-100 ${window.innerHeight/2} 100 0`
    const targetPath = `M 100 0 L100 ${window.innerHeight} Q100 ${window.innerHeight/2} 100 0`
    const pathAnimation = {
        initial: {
            d:[targetPath,initialPath,targetPath],
            transition:{
                ease:[0.76,0,0.24,1],
                duration: '.9'
            }
        },

    }
    return(
        <svg  className={'w-[100px] h-full absolute top-0 -right-24 fill-[#133] rotate-180  pointer-events-none'}>
            <motion.path
                variants={pathAnimation}
                animate = {menuActive?'initial':''}
                exit='exit'
                transition={{
                    ease:[0.76,0,0.24,1],
                    duration: '.8'
                }}
            >

            </motion.path>
        </svg>
    )
}
export default NavMenu;