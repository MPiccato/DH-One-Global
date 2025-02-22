import { FC } from "react";

interface Props {
    texto: string;
    onClick: () => void;
}


export const Button:FC<Props> = ({texto,onClick}) => {
  return (
    <div onClick={onClick}>{texto}</div>
  )
}
