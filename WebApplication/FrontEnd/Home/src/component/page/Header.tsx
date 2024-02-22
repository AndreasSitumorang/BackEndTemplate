import React, { FC, useState } from "react";

interface HeaderProps {
  text: string;
}

const Header: FC<HeaderProps> = ({ text }) => {
  return (
    <div>
      <h1> {text}</h1>
    </div>
  );
};

export default Header;
