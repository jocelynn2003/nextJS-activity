import React from "react";
import { useEffect, useState } from "react";

type ButtonProps = {
  name: string;
  onClick: () => void;
  className?: string;
};

export const Button = ({ name, onClick, className, ...props }: ButtonProps) => {
  //   const [count, setCount] = useState(0);
  //   console.log("state", count);
  return (
    <>
      <button className={className} {...props} onClick={onClick}>
        {name}
      </button>
    </>
  );
};

export default Button;
