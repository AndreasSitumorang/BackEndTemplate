import React from "react";

interface TitleProps {
  modulename: string;
}

const Title: React.FC<TitleProps> = ({ modulename }) => {
  return (
    <div className="Register-left" style={{ padding: "5px", margin: "10px" }}>
      <div className="card-heading">
        <h1>{modulename}</h1>
      </div>
    </div>
  );
};

export default Title;
