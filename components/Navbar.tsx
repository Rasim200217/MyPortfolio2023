import Link from "next/link";
import React from "react";

import { TbFileDownload } from "react-icons/tb";
import { FiMenu } from "react-icons/fi";

type Props = {};

function Navbar({}: Props) {
  return (
    <div className=" bg-white fixed top-0 w-[100%] z-10">
      <div className=" container mx-auto flex justify-between items-center py-4 px-4">
        <div className=" text-[24px]">Расим Ахмедшин</div>
        <div className="hidden md:flex gap-6">
          <Link className="hover:text-[#ff4D41]" href="/">
            Главная
          </Link>
          <Link className="hover:text-[#ff4D41]" href="/about">
            Обо мне
          </Link>
          <Link className="hover:text-[#ff4D41]" href="/portfolio">
            Портфолио
          </Link>
          <Link className="hover:text-[#ff4D41]" href="/blog">
            Блог
          </Link>
        </div>

        <a
          href="#"
          className="hidden md:flex border border-[#ff4D41] px-4 py-1 text-[#ff4D41] rounded-[5px] items-center gap-2 hover:bg-[#ff4D41] hover:text-white transition duration-200"
        >
          <TbFileDownload /> Скачать CV
        </a>

        <div className="md:hidden text-[24px]">
          <FiMenu />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
