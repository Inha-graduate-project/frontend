import { Steps } from "antd";

interface StepsComponentProps {
  current: number;
}
export default function StepsComponent({ current }: StepsComponentProps) {
  return (
    <>
      <Steps
        current={current}
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
}
