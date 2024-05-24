import Link from "next/link";
import React from "react";

interface Props {
  href: string;
  onClick: (e: React.MouseEvent) => void;
  scroll: boolean;
  className: string;
}

const Olink = ({ href, onClick, scroll, className }: Props) => {
  return (
    <Link
      href={href}
      onClick={(e: React.MouseEvent) => onClick(e)}
      scroll={scroll}
      className={className}
    >
      About Me
    </Link>
  );
};

export default Olink;
