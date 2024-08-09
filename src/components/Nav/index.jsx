import React, {Fragment, useRef, useState} from 'react';
import Button from "../smallComponents/Button/index.jsx";
import './../../index.css'
import './../../fontawesome/css/all.css'
import {motion, useScroll, useMotionValueEvent, AnimatePresence} from "framer-motion";
import NavButton from "../smallComponents/NavButton/index.jsx";


// eslint-disable-next-line react/prop-types
function Index({cursorScale,setCursorScale,menuActive,setMenuActive,menuHandler}) {


    // scroll for nav
    const [navState,setNavState] = useState(true);
    const {scrollY} = useScroll();
    useMotionValueEvent(scrollY,"change",(latestValue)=>{
        let previousValue = scrollY.getPrevious()
        if(latestValue>previousValue){
            setNavState(false)
        }else{
            setNavState(true)
        }
        if (latestValue>100){
           nav.current.classList.add('bg-black');
            nav.current.classList.add('backdrop-blur')
        }else{
            nav.current.classList.remove('bg-black')
            nav.current.classList.remove('backdrop-blur')
        }
    })
    const nav = useRef(null)
    // nav menu  li data

    return (
        <motion.nav
            className={`w-full h-20 px-5 lg:px-40 flex justify-between sticky top-0  cursor-none z-10 mx-auto 2xl:container w-full `}
            variants={{
                visible:{y:0},
                hidden:{y:'-100%'}
            }}
            ref={nav}
            animate = {navState?"visible":"hidden"}
            transition={{
                duration:0.35,
                ease:"easeInOut"
            }}
            dir={'rtl'}
        >
            <Logo setCursorScale={setCursorScale}/>
            <MenuButton cursorScale={cursorScale} setCursorScale={setCursorScale} menuActive={menuActive} menuHandler={menuHandler} />



        </motion.nav>
    );
}



function MenuButton({cursorScale,setCursorScale,menuActive,menuHandler}){
    return(
        <div className={'w-auto h-full  flex items-center '}>
            <Button
                text={'مشاوره'}
                dimension={'w-20 h-8 lg:w-32 lg:h-12 bg-[#6EE6921E] text-[#6ee692] hover:bg-[#6ee692] hover:text-black items-center outline outline-1 '}
                cursorScale={cursorScale}
                setCursorScale={setCursorScale}
            />
            <NavButton
                setCursorScale={setCursorScale}
                menuActive={menuActive}
                menuHandler={menuHandler}
            />
        </div>
    )
}

function Logo({setCursorScale}) {
    return (
        <>
            <figure className={'w-52 h-full  flex items-center justify-start'}
                    onMouseEnter={()=>{
                        setCursorScale(2);
                    }}
                    onMouseLeave={()=>{
                        setCursorScale(1)
                    }}
            >
                <img
                    src='https://outgrid.uicore.co/financial-solutions/wp-content/uploads/sites/8/2023/11/Logo-Outgrid.webp'
                    alt="" className={'w-[35%] lg:w-[50%] h-[30%] lg:h-[40%]   '}/>
            </figure>
        </>
    )
}


export default Index;