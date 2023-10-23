import { Button } from "antd";
import { Block } from "./styles";

interface DestinationButtonType {
  items: string[];
}
export default function DestinationButton({ items }: DestinationButtonType) {
  return (
    <Block>
      {items.map((item) => {
        return <Button>{item}</Button>;
      })}
    </Block>
  );
}
