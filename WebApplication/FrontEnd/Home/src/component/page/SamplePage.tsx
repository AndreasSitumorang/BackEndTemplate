import React from "react";
import Title from "../Assets/Title";

interface SamplePageProps {
    text: string;
}
 const SamplePage: React.FC<SamplePageProps> = ({ text }) => {
  return (
    <div>
      <Title modulename={text} />
    </div>
  );

};

export default SamplePage;
