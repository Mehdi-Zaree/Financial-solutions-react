import React from 'react';

function Index(props) {
    return (
        <>
            <footer className={'w-full   md:flex flex-wrap px-3'}>
                <figure className={'w-full  h-1/2 '}>
                    <img className={'md:mx-auto h-12 md:h-14 '} src="https://outgrid.uicore.co/financial-solutions/wp-content/uploads/sites/8/2023/11/Logo-Outgrid.webp" alt="" />
                    <figcaption className={'text-xl md:text-2xl text-[#BEC2CB] mt-3 md:text-center'}>
                        پتانسیل خود را با راه حل های نوآورانه ما آزاد کنید.
                    </figcaption>
                </figure>
                <div className={'w-full md:w-1/2   mt-10 '}>
                    <h4 className={'w-full  text-lg md:text-xl text-slate-50 *:text-lg md:text-center'}> رسانه های اجتماعی</h4>
                    <ul className={'*:text-[#BEC2CB] *:w-fit *:md:text-xl flex flex-col md:justify-center md:items-center'}>
                        <li className={'hover:text-[#3ebf4f] duration-300'}><a href="">لینکدین</a></li>
                        <li className={'hover:text-[#3ebf4f] duration-300'}><a href="">اینستاگرام</a></li>
                        <li className={'hover:text-[#3ebf4f] duration-300'}><a href="">تلگرام</a></li>
                        <li className={'hover:text-[#3ebf4f] duration-300'}><a href="">گیت هاب</a></li>
                    </ul>
                </div>
                <div className={'w-full md:w-1/2   mt-10  '}>
                    <h4 className={'w-full text-lg text-slate-50 *:text-lg md:text-xl md:text-center '}>مخاطب</h4>
                    <ul className={'*:text-[#BEC2CB] *:w-fit *:md:text-xl mt-2 flex flex-col md:justify-center md:items-center '}>
                        <li className={'hover:text-[#3ebf4f]  duration-300 '}><a href="mailto:mahdizarei22019@gmail.com">ایمیل : mahdizarei22019@gmail.com</a></li>
                        <li className={'hover:text-[#3ebf4f] duration-300'}><a href="">شماره تماس : 09366334236</a></li>
                    </ul>
                </div>
                <div className={'w-full md:justify-center items-center flex py-5 '}>
                    <span className={'text-[#BEC2CB] md:text-xl'}>توسعه دهنده فرانت اند : </span>
                    <h4 className={'hover:text-[#3ebf4f] duration-300 text-slate-50 px-2 md:text-2xl'}><a href="">مهدی زارعی</a></h4>
                </div>
            </footer>
        </>
    );
}

export default Index;