import React from "react";

interface Props {
  title: string;
}

const Skill = ({ title }: Props) => {
  return <div className="testest bg-gray-800">{title}</div>;
};

export default Skill;
