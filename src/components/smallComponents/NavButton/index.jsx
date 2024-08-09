import React from 'react';

function NavButton({setCursorScale,menuActive,menuHandler}) {
    return (
        <>
            <div className={' w-12 h-6  flex flex-col items-end justify-center *:rounded-md *:duration-200  overflow-hidden '}
                 onMouseEnter={() => setCursorScale(2)}
                 onMouseLeave={() => setCursorScale(1)}
                 onClick={menuHandler}
            >
                <div
                    className={`w-5 h-[2px] bg-white ${menuActive ? '-translate-y-10' : '-translate-y-1'} ${menuActive ? 'opacity-0' : 'opacity-100'}`}></div>
                <div className={'w-4 h-[2px] relative *:duration-200 '}>
                    <div
                        className={`w-full h-full bg-white absolute left-0 rounded-md ${menuActive ? 'rotate-45' : 'rotate-0'} origin-center`}></div>
                    <div
                        className={`w-full h-full bg-white absolute left-0 rounded-md ${menuActive ? '-rotate-45' : 'rotate-0'} origin-center`}></div>
                </div>
                <div
                    className={`w-5 h-[2px] bg-white ${menuActive ? 'translate-y-10' : 'translate-y-1'} ${menuActive ? 'opacity-0' : 'opacity-100'}`}></div>
            </div>
        </>
    );
}

export default NavButton;