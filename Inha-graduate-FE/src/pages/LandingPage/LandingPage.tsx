import { DestinationPicker, StepsComponent } from "../../components";
import { Block, ContentBox, NextButton } from "./styles";
import { ArrowRightOutlined } from "@ant-design/icons";
import { useState } from "react";

export default function LandingPage() {
  const [page, setPage] = useState(0);
  return (
    <>
      <Block>
        <StepsComponent />
        <ContentBox>
          {page === 0 && <DestinationPicker />}
          <NextButton type="primary">
            다음 <ArrowRightOutlined />
          </NextButton>
        </ContentBox>
      </Block>
    </>
  );
}
