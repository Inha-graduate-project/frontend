import { Tabs, Timeline, Typography } from "antd";
import { Container } from "./styles";
export default function CourseSideBar() {
  const { Title } = Typography;
  const course = [
    {
      children: "쇠소깍",
      address: "제주 서귀포시 쇠소깍로 104",
    },
    {
      children: "소원김밥",
      color: "green",
      address: "제주 서귀포시 쇠소깍로 160",
    },
    {
      children: "용머리해안",
      address: "제주 서귀포시 안덕면 사계리",
    },
    {
      children: "올레마당",
      color: "green",
      address: "제주 서귀포시 안덕면 사계남로 224",
    },
    {
      children: "헬로키티아일랜드",
      address: "제주 서귀포시 안덕면 한창로",
    },
    {
      children: "춘심이네 본점",
      color: "green",
      address: "제주 서귀포시 안덕면 창천중앙로",
    },
    {
      children: "금능해수욕장",
      address: "제주 제주시 한림읍 금능리",
    },
  ];
  return (
    <Container width={400}>
      <Title level={4}>제주도의 추천 여행 코스입니다.</Title>
      <Tabs
        defaultActiveKey="1"
        centered
        items={new Array(3).fill(null).map((_, i) => {
          const id = String(i + 1);
          return {
            label: `Day ${id}`,
            key: id,
            children: <Timeline items={course} mode="alternate" />,
          };
        })}
      />
    </Container>
  );
}
