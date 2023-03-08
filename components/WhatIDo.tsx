import React from 'react'
import Heading from './Heading'

type Props = {}

function WhatIDo({}: Props) {
  return (
   <section className=' container mx-auto py-10 px-4'>
    <Heading title='Что я умею?' />

    <div className=' grid grid-cols-1 md:grid-cols-3 gap-6'>

        <div className=' shadow-lg flex flex-col gap-4 px-8 py-10 bg-[#ff4d41] text-white'>
            <h2 className=' font-medium text-[20px]'>Маркетинг</h2>
            <p>Настройка рекламных компаний Yandex Direct, Google Ads. Проводить анализ рекламных компаний в Yandex Metrika, Google Analytics. Сбор семантического ядра (использую KeyCollector). Составление контент плана в социальных сетей и так таргетированая реклама. Проводить анализ конкуректов, SWOT анализ.</p>
        </div>

        
        <div className=' shadow-lg flex flex-col gap-4 px-8 py-10 bg-[#ff4d41] text-white'>
            <h2 className=' font-medium text-[20px]'>Дизайн</h2>
            <p></p>
        </div>
    </div>
   </section>
  )
}

export default WhatIDo