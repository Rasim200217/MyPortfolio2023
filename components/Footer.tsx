import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className=" bg-gray-500 h-[200px] text-white grid place-items-center">
      <div className=" text-center">
        <p>&copy; 2023 Akhmedshin Rasim</p>
        <a href="tel:+998903487181">Номер телефона: +998 (90) 348 71 81</a>
      </div>
    </div>
  );
};

export default Footer;
