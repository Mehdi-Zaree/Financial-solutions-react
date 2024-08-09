import React, { useEffect, useState} from 'react';
import './index.css'
import './fontawesome/css/all.min.css'
import {AnimatePresence, motion, useMotionValue, useSpring} from "framer-motion";
import Nav from './components/Nav/index.jsx'
import Hero from "./components/Sections/HeroSection/Hero.jsx";
import FeatureSection from "./components/Sections/FeatureSection/index.jsx";
import ThirdSection from "./components/Sections/ThirdSection/index.jsx";
import FourthSection from "./components/Sections/FourthSection/index.jsx";
import FifthSection from "./components/Sections/FifthSection/index.jsx";
import CommentSection from "./components/Sections/CommentSection/index.jsx";
import FAQSection from "./components/Sections/FAQsection/index.jsx";
import SixthSection from "./components/Sections/SixthSection/index.jsx";
import Footer from "./components/Sections/Footer/index.jsx";
import NavMenu from "./components/smallComponents/NavMenu/index.jsx";
function App() {
    const [cursorScale,setCursorScale] = useState(1);
    const [menuActive, setMenuActive] = useState(false);
    // cursor initial positions
    const cursorX = useMotionValue(-100)
    const cursorY = useMotionValue(-100)
    // framer spring 
    const springConfig = { damping: 35, stiffness: 1000 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);
    // setting x and y to mouse position
    useEffect(() => {
        const moveCursor = (e) => {
            cursorX.set(e.clientX - 16)
            cursorY.set(e.clientY - 16)
        }
        window.addEventListener('mousemove', moveCursor)
        return () => {
            window.removeEventListener('mousemove', moveCursor)
        }
    }, [])
    // nav menu handler
    const menuHandler = ()=>{
        setMenuActive(!menuActive);
    }
    return (
        <>
            <Nav setCursorScale={setCursorScale} menuActive={menuActive} setMenuActive={setMenuActive}
                 menuHandler={menuHandler}/>
            <AnimatePresence mode={'wait'}>
                <NavMenu menuActive={menuActive} MenuHandler={menuHandler} setCursorScale={setCursorScale}/>
            </AnimatePresence>
            <motion.div
                className={` w-10 h-10 fixed left-0 top-0 border-2 border-[#3ebf4f] hidden lg:flex rounded-full z-50 transition  ease-out duration-200 pointer-events-none`}
                style={{
                    translateX: cursorXSpring,
                    translateY: cursorYSpring,
                    scale: `${cursorScale}`,
                    zIndex: 9999
                }}

            ></motion.div>
            <main className={'px-5 myFont mx-auto 2xl:container w-full h-auto lg:cursor-none overflow-hidden'}
                  dir={'rtl'}
            >
                <Hero setCursorScale={setCursorScale}/>
                <FeatureSection/>
                <ThirdSection setCursorScale={setCursorScale}/>
                <FourthSection setCursorScale={setCursorScale}/>
                <FifthSection setCursorScale={setCursorScale}/>
                <CommentSection/>
                <FAQSection setCursorScale={setCursorScale}/>
                <SixthSection setCursorScale={setCursorScale}/>
                <Footer setCursorScale={setCursorScale}/>
            </main>
        </>
    );
}

export default App;