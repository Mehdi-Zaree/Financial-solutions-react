import React from 'react';

function Index({imgSrc1, imgSrc2, mainDivStyle, imgStyle1, imgStyle2}) {
    return (
        <>
            <div className={mainDivStyle}>
                <figure className={`${imgStyle1} overflow-hidden`}>
                    <img src={imgSrc1} alt="" className={'w-full h-full '} />
                </figure>
                <figure className={`${imgStyle2} overflow-hidden`}>
                    <img src={imgSrc2} alt="" className={'w-full h-full '} />
                </figure>
            </div>
        </>
    );
}


export default Index;