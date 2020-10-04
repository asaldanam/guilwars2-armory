import React, { ReactNode } from "react";

/** Fragment para renderizado condicional */
export const If: React.FC<{
  children?: ReactNode;
  condition: any;
}> = ({ condition, children }) => {
  return <React.Fragment>{condition && children}</React.Fragment>;
};
