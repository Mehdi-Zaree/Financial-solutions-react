import React, {useState} from 'react';
import FeatureBox from "../../smallComponents/FeatureBox/index.jsx";
import {motion} from "framer-motion";
import {fadeUp} from "../../smallComponents/Variants.jsx";


function Index() {
    const [featureData,setFeatureData] = useState([
        {
            id:1,
            Header: 'راه حل های شخصی سازی شده',
            description : 'راه‌حل‌های ما که برای نیازهای شما طراحی شده‌اند، مطابقت دقیق با اهداف و چالش‌های شما را تضمین می‌کنند و نتایج مؤثری را ارائه می‌دهند.',
            Icon : 'fa-solid fa-filter-circle-dollar',
            iconColor:'text-[#63D8D9]'

        },
        {
            id:2,
            Header: 'فن آوری پیشرفته',
            description : 'ما با فناوری پیشرفته، بهینه سازی فرآیندها برای کارایی، جلوتر از روندهای صنعت و ارائه جدیدترین نوآوری ها رهبری می کنیم.',
            Icon : 'fa-duotone fa-solid fa-bullseye',
            iconColor:'text-[#8664EF]'

        },
        {
            id:3,
            Header: 'گزارش گیری جامع',
            description : 'گزارش‌های تفصیلی دیدگاهی جامع ارائه می‌دهند، تصمیم‌گیری آگاهانه و ردیابی موفقیت را تقویت می‌کنند، شفافیت و مسئولیت‌پذیری را تضمین می‌کنند.',
            Icon : 'fa-duotone fa-solid fa-file',
            iconColor:'text-[#509CF0]'

        },
        {
            id:4,
            Header: 'راهنمایی تخصصی',
            description : 'پیچیدگی را با متخصصان باتجربه ما هدایت کنید، با دریافت مشاوره و بینش متخصص که شما را در تصمیم گیری راهنمایی می کند.',
            Icon : 'fa-duotone fa-solid fa-credit-card',
            iconColor:'text-[#8663F0]'

        },
        {
            id:5,
            Header: 'آموزش مشتری',
            description : 'ارائه منابع آموزشی و پشتیبانی به مشتریان برای کمک به تصمیم گیری های مالی آگاهانه و دستیابی به اهداف مالی خود.',
            Icon : 'fa-duotone fa-solid fa-building-columns',
            iconColor:'text-[#7CE8A5]'

        },
        {
            id:6,
            Header: 'گزارش گیری دقیق ',
            description : 'ارائه گزارش های دقیق عملکرد و سایر داده های مالی به مشتریان برای کمک به آنها در مورد سرمایه گذاری و پیشرفت مالی خود مطلع شوند.',
            Icon : 'fa-duotone fa-solid fa-money-bill',
            iconColor:'text-[#65dadb]'
        }

    ])
    return (
        <section className={'w-full  gap-3 mt-10'}>
            <div
                className={'w-[90%] lg:grid lg:grid-cols-3 flex-col gap-4  mx-auto lg:justify-items-center'}

            >
                {featureData.map((feature,index)=>{
                    return(
                        <FeatureBox key={index} mainStyle={`w-4/4 `} iconColor={''+feature.iconColor+' outline outline-1 '} Icon={feature.Icon} Header={feature.Header} Description={feature.description} id={feature.id}/>
                    )
                })}
            </div>

        </section>
    );
}

export default Index;