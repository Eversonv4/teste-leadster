import { ILoadAnimationProps } from "./interface";
import { Container } from "./styles";

export function LoadingAnimation({
  size,
  bgColor,
  color,
}: ILoadAnimationProps) {
  return <Container size={size} bgColor={bgColor} color={color} />;
}
