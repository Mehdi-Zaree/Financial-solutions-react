import React from 'react';

function Index({style,hStyle,pStyle,hText,pText,pText2,pStyle2}) {
    return (
        <>
            <div className={style}>
                <h2 className={hStyle}>{hText}</h2>
                <p className={pStyle}>{pText}</p>
                <p className={pStyle2}>{pText2}</p>
            </div>
        </>
    );
}

export default Index;