// eslint-disable-next-line no-unused-vars
import React, {useRef, useState} from 'react';

// eslint-disable-next-line react/prop-types
function Index({Data,setCursorScale}) {

    const [selected, setSelected] = useState(null)
    const toggle = (index)=>{
        if(selected === index){
            return setSelected(null)
        }
        setSelected(index)
    }
    return (
        <>
            {/* eslint-disable-next-line react/prop-types */}
            {Data.map((item,index)=>{
                return (
                    <div className={'w-full  group rounded-lg overflow-hidden *:duration-300 *:transition-all *:ease-in-out'}
                    key={index}
                    >
                        <div
                            className={`flex justify-between align-items-center *:duration-300 p-5 md:p-8 ${selected===index?'bg-[#80808059]':'bg-transparent'}`}
                            onClick={()=> toggle(index)}
                            onMouseEnter={()=>{
                                setCursorScale(2)
                            }}
                            onMouseLeave={()=>{
                                setCursorScale(1)
                            }}
                        >
                            <h2 className={'w-full text-white group-hover:text-[#3EBF4F] text-sm md:text-xl lg:text-2xl pointer-events-none'}>{item.Question}</h2>
                            <i className={`fa-duotone fa-solid ${selected === index ? 'fa-circle-minus':'fa-circle-plus'} group-hover:text-[#3EBF4F] text-white text-2xl pointer-events-none`}></i>
                        </div>
                        <div className={`${selected === index ? 'h-32' : 'h-[1px]'} origin-top bg-[#80808059]`} >
                            <p className={' text-[#C1C1C1] text-lg lg:text-xl p-2 '}>{item.Answer}</p>
                        </div>
                    </div>
                )
            })}

        </>
    );
}

export default Index;