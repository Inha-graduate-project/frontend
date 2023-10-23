import { DestinationButton } from "../DestinationButton";
import { NoMarginTitle } from "./styles";

export default function DestinationPicker() {
  const items = [
    "서울",
    "부산",
    "대구",
    "인천",
    "광주",
    "대전",
    "울산",
    "세종",
    "경기",
    "강원",
    "충북",
    "충남",
    "전북",
    "전남",
    "경북",
    "경남",
    "제주",
  ];
  return (
    <>
      <NoMarginTitle>원하는 지역을 선택해 주세요.</NoMarginTitle>
      <DestinationButton items={items} />
    </>
  );
}
