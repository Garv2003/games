import type { ButtonProps } from "../types";

const Button = ({ text, onClick, className }: ButtonProps) => {
  return (
    <button className={className} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
