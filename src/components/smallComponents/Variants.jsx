import {backOut, easeIn} from "framer-motion";

export const fadeUp = (direction,time)=>{
    return{
        hidden:{
            y:direction ==='up'? 40 : direction ==='down'?-40 :0,
            x:direction ==='left'? -40 : direction ==='right'? 40 :0,
            opacity:0
        },
        visible:{
            y:0,
            x:0,
            opacity:1,
            transition:{
                type: 'spring',
                restSpeed: .6,
                ease: [0, 0.71, 0.2, 1.01],
                duration:1.2,
                delay:time,

            }
        }
    }
}