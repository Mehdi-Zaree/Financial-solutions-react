import React from 'react';

function Index({text,dimension,icon,iconColor,setCursorScale}) {

    return (
        <>
            <button
                onMouseEnter={()=>{
                    setCursorScale(2)
                }}
                onMouseLeave={()=>{
                    setCursorScale(1)
                }}
                className={'' + dimension + '   justify-center duration-200 overflow-hidden flex flex-col relative rounded-md   text-lg lg:text-2xl group cursor-none'}>
                <span
                    className={' -translate-y-1 group-hover:-translate-y-10 group-hover:opacity-0 duration-500 absolute'}>
                    {text}
                </span>
                <span
                    className={'opacity-0 translate-y-6  group-hover:-translate-y-1 group-hover:opacity-100 duration-500 absolute'}>
                    {text}
                </span>
                <span className={''+iconColor+' text-sm  absolute left-[2px] lg:left-[45px] flex items-center justify-center   '}>
                        <i className={icon}></i>
                </span>

            </button>
        </>

    );
}

export default Index;