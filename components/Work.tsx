import Image from "next/image";
import React from "react";
import Heading from "./Heading";

import me from "./aboutme.jpg";

type Props = {};

function Work({}: Props) {
  return (
    <section className="container mx-auto py-10 px-4">
      <Heading title="Мои работы" />

      <div className="grid grid-cols-3 gap-4">
        <div className="row-span-2 relative group">
          <Image src={me} alt="" />
          <div className="bg-[#000000bd] absolute w-[100%] h-[100%] top-0 opacity-0 transition duration-500 group-hover:opacity-100 grid place-items-center text-white">
            Title
          </div>
        </div>

        <div className="row-span-2 relative group">
          <Image src={me} alt="" />
          <div className="bg-[#000000bd] absolute w-[100%] h-[100%] top-0 opacity-0 transition duration-500 group-hover:opacity-100 grid place-items-center text-white">
            Title
          </div>
        </div>

        <div className="row-span-2 relative group">
          <Image src={me} alt="" />
          <div className="bg-[#000000bd] absolute w-[100%] h-[100%] top-0 opacity-0 transition duration-500 group-hover:opacity-100 grid place-items-center text-white">
            Title
          </div>
        </div>
        <div className="row-span-2 relative group">
          <Image src={me} alt="" />
          <div className="bg-[#000000bd] absolute w-[100%] h-[100%] top-0 opacity-0 transition duration-500 group-hover:opacity-100 grid place-items-center text-white">
            Title
          </div>
        </div>
      </div>
    </section>
  );
}

export default Work;
