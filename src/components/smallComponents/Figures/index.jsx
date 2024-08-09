import React from 'react';

function Index({figures,name}) {
    return (
        <div className={' text-end'}>
            <span className={'text-2xl font-bold text-[#6ee692]'}>{figures}</span>
            <h4 className={'text-[#57678b] text-lg'}>{name}</h4>
        </div>
    );
}

export default Index;