import { CourseSideBar } from "../../components";
import { Block, Container } from "./styles";

export default function CoursePage() {
  return (
    <Block>
      <CourseSideBar />
      <Container>지도</Container>
    </Block>
  );
}
