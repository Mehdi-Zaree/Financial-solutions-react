import React from 'react';
import ImageBox from "../ImageBox/index.jsx";
import TextBox from "../TextBox/index.jsx";

function Index({style,text,pText,hStyle,pStyle,imgDiv,imgSrc1,imgSrc2,imgStyle1,imgStyle2}) {
    return (
        <>
            <div className={style}>
                <TextBox

                />
                <ImageBox
                    mainDivStyle={'w-full  h-32 flex gap-2'}
                    imgStyle1={'w-1/2 h-full  rounded-xl'}
                    imgStyle2={'w-1/2 h-full  rounded-xl'}
                    imgSrc1={'https://outgrid.uicore.co/financial-solution/wp-content/uploads/sites/8/2023/06/Financial-Solution-Tax-Image-1.webp'}
                    imgSrc2={'https://outgrid.uicore.co/financial-solution/wp-content/uploads/sites/8/2023/06/Financial-Solution-Tax-Image-2.webp'}
                />
            </div>
        </>
    );
}

export default Index;