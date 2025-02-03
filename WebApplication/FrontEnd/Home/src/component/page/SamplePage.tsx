import React from "react";

interface SamplePageProps {
    text: string;
}
 const SamplePage: React.FC<SamplePageProps> = ({ text }) => {
  return (
    <div>
      <h1>Sample Page {text}</h1>
    </div>
  );

};

export default SamplePage;
