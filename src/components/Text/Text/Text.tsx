import React from "react";
import clsx from 'clsx'

export const Text: React.FC<{
  className: string;
  children: React.ReactNode;
  size: "sm" | "md" | "lg" | "xl";
  bold?: boolean;
}> = (props) => {
  const getSize = () => {
    switch(props.size) {
      case "sm":
        return 'text-sm'
      case "md":
        return 'text-md'
      case "lg":
        return 'text-lg'
      case "xl":
        return 'text-xl'
    }
  }
  return <p className={clsx(getSize())}>{props.children}</p>;
};
