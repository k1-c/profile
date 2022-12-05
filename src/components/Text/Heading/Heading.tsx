import React from "react";

type HeadingProps = {
  children: React.ReactNode
}

export const Heading: React.FC<HeadingProps> = (props) => {
  return (
    <div className="text-2xl">{props.children}</div>
  );
}
