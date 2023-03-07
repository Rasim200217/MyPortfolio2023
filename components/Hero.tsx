import React from "react";

import TypeWriter from "typewriter-effect";
import Button from "./Button";

type Props = {};

function Hero({}: Props) {
  return (
    <div className="hero">
      <div className=" container mx-auto px-4">
        <div className=" max-w-[450px] text-white flex flex-col gap-[40px]">
          <div>
            <h1 className=" text-5xl">Расим Ахмедшин</h1>
            <h4 className=" text-2xl mt-3">
              <TypeWriter
                options={{
                  strings: [
                    "Маркетолог",
                    "Графический дизайнер",
                    "UI/UX дизайнер",
                    "Front-end разработчик",
                  ],
                  delay: 3,
                  autoStart: true,
                  deleteSpeed: 1,
                  loop: true,
                }}
              />
            </h4>
          </div>

          <div className=" bg-[#ff4D41] h-[2px] w-[40px]"></div>

          <div>
            <p>
              Кандидат с опытом в маркетинге, дизайне и веб-разработке, умеет
              создавать эффективные кампании, дизайн-концепции и веб-сайты,
              используя современные технологии. Ключевые навыки: работа в
              команде, креативность и аналитическое мышление.
            </p>

            <Button link="tel:+998903487181" text="Позвонить" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
