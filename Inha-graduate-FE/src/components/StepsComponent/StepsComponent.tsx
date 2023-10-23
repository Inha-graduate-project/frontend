import React, { useState } from "react";
import { Steps } from "antd";

const StepsComponent: React.FC = () => {
  const [current, setCurrent] = useState(0);

  const onChange = (value: number) => {
    console.log("onChange:", value);
    setCurrent(value);
  };

  return (
    <>
      <Steps
        current={current}
        onChange={onChange}
        items={[
          {
            title: "어디로 갈까?",
          },
          {
            title: "얼마나 있을까?",
          },
          {
            title: "선호 여행 스타일",
          },
        ]}
      />
    </>
  );
};

export default StepsComponent;
