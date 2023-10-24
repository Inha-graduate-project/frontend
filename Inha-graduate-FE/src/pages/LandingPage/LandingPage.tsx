import {
  DestinationPicker,
  StepsComponent,
  SchedulePicker,
  DestinationCards,
} from "../../components";
import { Block, ContentBox, NextButton } from "./styles";
import { useState } from "react";
import { useTransition, animated } from "@react-spring/web";

export default function LandingPage() {
  const [page, setPage] = useState(0);

  const items = [
    () => (page === 0 && <DestinationPicker />),
    () => (page === 1 && <SchedulePicker />),
    () => (page === 2 && <DestinationCards />),
    () => (
      <NextButton
        onClick={() => {
          setPage((page) => page + 1);
        }}
        type="primary"
      >
        다음
      </NextButton>
    ),
  ];

  const duration = 300;
  const translateY = 4;

  const transition = useTransition(items, {
    from: { opacity: 0, transform: `translateY(${translateY}px)` },
    enter: { opacity: 1, transform: `translateY(0)` },
    config: { duration: duration },
  });

  return (
    <Block>
      <StepsComponent />
      <ContentBox>
        {transition((styles, item) => (
          <animated.div style={styles}>
            {item()}
          </animated.div>
        ))}
      </ContentBox>
    </Block>
  );
}
