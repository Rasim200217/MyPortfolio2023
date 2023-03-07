import React from "react";

type Props = {};

function Heading(props: { title: string }) {
  return (
    <div className=" text-[#232940] text-[32px] font-medium flex items-center gap-4 py-16">
      {props.title}
      <div className=" bg-[#ff4d41] h-[2px] w-[40px] translate-y-1"></div>
    </div>
  );
}

export default Heading;
