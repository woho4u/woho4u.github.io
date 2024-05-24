import React from "react";

interface Props {
  title: string;
  link?: string;
  Class?: string;
}

const Navlink = ({ title, link = "#", Class }: Props) => {
  return (
    <a className={`${Class} navlink font-sans`} href={link}>
      {title}
    </a>
  );
};

export default Navlink;
