import React from "react";
import Heading from "./Heading";

type Props = {};

const Skills = (props: Props) => {
  return (
    <section className="container mx-auto py-10 px-4">
      <Heading title="Навыки" />

      <p className=" text-gray-600 -mt-10 mb-10">
        Я имею опыт работы в разных сферах, таких как маркетинг, управление
        проектами, дизайн, что позволило мне развить навыки коммуникации,
        решения проблем, аналитического мышления и управления временем. Кроме
        того, я имею опыт работы с различными программными продуктами и
        технологиями.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <p>Yandex Direct</p>
          <div className="relative bg-gray-400 h-[4px] mt-2">
            <div className="bg-[#ff4d41] absolute h-[4px] w-[70%]"></div>
          </div>
        </div>
        <div>
          <p>Google Ads</p>
          <div className="relative bg-gray-400 h-[4px] mt-2">
            <div className="bg-[#ff4d41] absolute h-[4px] w-[70%]"></div>
          </div>
        </div>
        <div>
          <p>Facebook Ads</p>
          <div className="relative bg-gray-400 h-[4px] mt-2">
            <div className="bg-[#ff4d41] absolute h-[4px] w-[60%]"></div>
          </div>
        </div>
        <div>
          <p>Yandex Metrika</p>
          <div className="relative bg-gray-400 h-[4px] mt-2">
            <div className="bg-[#ff4d41] absolute h-[4px] w-[70%]"></div>
          </div>
        </div>
        <div>
          <p>Key collector</p>
          <div className="relative bg-gray-400 h-[4px] mt-2">
            <div className="bg-[#ff4d41] absolute h-[4px] w-[80%]"></div>
          </div>
        </div>
        <div>
          <p>Google Tables</p>
          <div className="relative bg-gray-400 h-[4px] mt-2">
            <div className="bg-[#ff4d41] absolute h-[4px] w-[80%]"></div>
          </div>
        </div>
        <div>
          <p>Figma</p>
          <div className="relative bg-gray-400 h-[4px] mt-2">
            <div className="bg-[#ff4d41] absolute h-[4px] w-[90%]"></div>
          </div>
        </div>
        <div>
          <p>Photoshop</p>
          <div className="relative bg-gray-400 h-[4px] mt-2">
            <div className="bg-[#ff4d41] absolute h-[4px] w-[80%]"></div>
          </div>
        </div>
        <div>
          <p>Illustrator</p>
          <div className="relative bg-gray-400 h-[4px] mt-2">
            <div className="bg-[#ff4d41] absolute h-[4px] w-[60%]"></div>
          </div>
        </div>
        <div>
          <p>Premier pro</p>
          <div className="relative bg-gray-400 h-[4px] mt-2">
            <div className="bg-[#ff4d41] absolute h-[4px] w-[60%]"></div>
          </div>
        </div>
        <div>
          <p>After Effects</p>
          <div className="relative bg-gray-400 h-[4px] mt-2">
            <div className="bg-[#ff4d41] absolute h-[4px] w-[40%]"></div>
          </div>
        </div>

        <div>
          <p>HTML/CSS</p>
          <div className="relative bg-gray-400 h-[4px] mt-2">
            <div className="bg-[#ff4d41] absolute h-[4px] w-[80%]"></div>
          </div>
        </div>

        <div>
          <p>JavaScript/React.js</p>
          <div className="relative bg-gray-400 h-[4px] mt-2">
            <div className="bg-[#ff4d41] absolute h-[4px] w-[50%]"></div>
          </div>
        </div>

        <div>
          <p>Notion</p>
          <div className="relative bg-gray-400 h-[4px] mt-2">
            <div className="bg-[#ff4d41] absolute h-[4px] w-[70%]"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
