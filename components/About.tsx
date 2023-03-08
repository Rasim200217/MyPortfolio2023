import React from "react";
import Heading from "./Heading";

import * as AboutMe from "./aboutme.jpg";
import Image from "next/image";

import { AiOutlineGift } from "react-icons/ai";
import { FiBookOpen } from "react-icons/fi";
import { TbPacman } from "react-icons/tb";
import { IoLocationOutline } from "react-icons/io5";
import { AiOutlineBarChart } from "react-icons/ai";
import Button from "./Button";

type Props = {};

function About({}: Props) {
  return (
    <section className=" container mx-auto py-10 px-4">
      <Heading title="Обо мне" />

      <div className=" grid grid-cols-1 md:grid-cols-2 gap-[60px]">
        <div>
          <Image alt="Rasim" className="w-[400px]" src={AboutMe} />
        </div>

        <div>
          <div className="flex items-center justify-between w-[350px]">
            <div className="flex flex-col gap-6">
              <div className="flex gap-4 items-center font-medium">
                <AiOutlineGift className=" text-[#ff4d41] text-[22px]" />
                День рождения
              </div>
              <div className="flex gap-4 items-center font-medium">
                <FiBookOpen className=" text-[#ff4d41] text-[22px]" />
                Образование
              </div>
              <div className="flex gap-4 items-center font-medium">
                <AiOutlineBarChart className=" text-[#ff4d41] text-[22px]" />
                Языки
              </div>
              <div className="flex gap-4 items-center font-medium">
                <TbPacman className=" text-[#ff4d41] text-[22px]" />
                Интересы
              </div>
              <div className="flex gap-4 items-center font-medium">
                <IoLocationOutline className=" text-[#ff4d41] text-[22px]" />
                Гражданство
              </div>
            </div>

            <div className="flex flex-col gap-6 text-gray-600">
              <div>:</div>
              <div>:</div>
              <div>:</div>
              <div>:</div>
              <div>:</div>
            </div>

            <div className="flex flex-col gap-6 text-gray-600">
              <div>17.06.2002</div>
              <div>Среднее</div>
              <div>Русский</div>
              <div>Тренажерный зал</div>
              <div>Узбекистан, Ташкент</div>
            </div>
          </div>

    <div className=" max-w-[800px]">

      <h2 className=" font-bold mt-16 mb-10">Меня зовут Расим, я маркетолог</h2>
      <p className=" text-gray-600"> Я работаю в компании, которая продает строительные материалы. Как маркетолог, я занимаюсь исследованием рынка, определяю потребности нашей целевой аудитории, разрабатываю маркетинговые стратегии и настраиваю рекламные кампании для продвижения нашей продукции. Так же занимаюсь создание физуальной части бренда.</p>
      <Button link="#" text="Подробнее" />
    </div>

        </div>
      </div>
    </section>
  );
}

export default About;
