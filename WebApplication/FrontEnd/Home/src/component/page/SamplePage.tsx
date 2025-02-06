import React from "react";
import Title from "../Assets/Title";

interface SamplePageProps {
  namePage: string;
}
 const SamplePage: React.FC<SamplePageProps> = ({ namePage }) => {
  return (
    <div>
      <Title modulename={namePage} />
    </div>
  );

};

export default SamplePage;
