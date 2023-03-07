import React from "react";

type Props = { link: string; text: string };

const Button = (props: { link: string; text: string }) => {
  return (
    <a href={props.link} className="btn">
      {props.text}
    </a>
  );
};

export default Button;
