import {
  DestinationPicker,
  StepsComponent,
  SchedulePicker,
} from "../../components";
import { Block, ContentBox, NextButton } from "./styles";
import { useState } from "react";

export default function LandingPage() {
  const [page, setPage] = useState(0);
  return (
    <>
      <Block>
        <StepsComponent />
        <ContentBox>
          {page === 0 && <DestinationPicker />}
          {page === 1 && <SchedulePicker />}
          <NextButton
            onClick={() => {
              setPage((page) => page + 1);
            }}
            type="primary"
          >
            다음
          </NextButton>
        </ContentBox>
      </Block>
    </>
  );
}
