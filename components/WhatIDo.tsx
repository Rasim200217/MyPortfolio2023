import React from "react";
import Heading from "./Heading";

import {
  AiFillWechat,
  AiFillFormatPainter,
  AiFillControl,
} from "react-icons/ai";

type Props = {};

function WhatIDo({}: Props) {
  return (
    <section className="container mx-auto py-10 px-4">
      <Heading title="Что я умею?" />

      <div className=" grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className=" shadow-lg flex flex-col gap-4 px-8 py-10 bg-[#ff4d41] text-white">
          <AiFillWechat size={40} />

          <h2 className=" font-medium text-[20px]">Маркетинг</h2>
          <p>
            Выполнять конфигурацию рекламных кампаний на платформах
            Яндекс.Директ и Google Ads. Анализировать результаты рекламных
            кампаний с помощью Яндекс.Метрики и Google Analytics. Собирать
            ключевые слова для оптимизации поисковой выдачи с помощью
            KeyCollector. Разрабатывать контент-план для социальных сетей и
            создавать таргетированную рекламу. Анализировать конкурентов и
            проводить SWOT-анализ.
          </p>
        </div>

        <div className=" shadow-lg flex flex-col gap-4 px-8 py-10 bg-[#ff4d41] text-white">
          <AiFillFormatPainter size={40} />

          <h2 className=" font-medium text-[20px]">Дизайн</h2>

          <p>
            Разработка графических элементов, которые будут использоваться в
            рекламных материалах, включая логотипы, баннеры, фотографии,
            иллюстрации и другие графические элементы. Создание визуальной
            концепции брендинга, которая будет соответствовать целям бизнеса и
            узнаваема для целевой аудитории. Переосмысление существующих
            графических элементов бренда, чтобы обновить его внешний вид и
            повысить его привлекательность. Разработка постов для социальных
            сетей, которые будут содержать качественные фотографии и графические
            элементы, привлекающие внимание и стимулирующие взаимодействие с
            целевой аудиторией.
          </p>
        </div>

        <div className=" shadow-lg flex flex-col gap-4 px-8 py-10 bg-[#ff4d41] text-white">
          <AiFillControl size={40} />

          <h2 className=" font-medium text-[20px]">Другое</h2>

          <p>
            Кроме того, у меня есть опыт в создании веб-сайтов, я писал код на
            HTML, CSS и JavaScript, однако я предпочитаю использовать фреймворк
            Next.js для упрощения процесса разработки. Я также имею опыт съемки
            и монтажа видео, что позволяет создавать качественный видеоконтент
            для использования в целях маркетинга и продвижения бренда.
          </p>
        </div>
      </div>
    </section>
  );
}

export default WhatIDo;
