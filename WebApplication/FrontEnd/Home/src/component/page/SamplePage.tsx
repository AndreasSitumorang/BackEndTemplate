import React, { useState, useEffect } from "react";
import Title from "../Assets/Title";
import { jwtDecode } from "jwt-decode";
import CheckToken from "../Context/CheckToken";

interface SamplePageProps {
  namePage: string;
}
const SamplePage: React.FC<SamplePageProps> = ({ namePage }) => {

  const isTokenActive = CheckToken();

  const handlerefresh = () => {
    console.log("Status Token", isTokenActive);

    if (!isTokenActive) {
      window.location.reload();
    }
  };

  return (
    <div onClick={handlerefresh}>
      <Title modulename={namePage} />
    </div>
  );
};

export default SamplePage;
