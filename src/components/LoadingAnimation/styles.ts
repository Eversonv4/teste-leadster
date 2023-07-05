import { rotate } from "@shared/animations/styles";
import styled from "styled-components";
import { ILoadAnimationProps } from "./interface";

export const Container = styled.span<ILoadAnimationProps>`
  display: block;
  margin: 10px auto;

  height: ${({ size }) => (size ? size : "30px")};
  width: ${({ size }) => (size ? size : "30px")};

  border: 2px solid transparent;
  border-bottom-color: ${({ theme, color }) =>
    color ? color : theme.colors.primary_blue};
  border-radius: 50%;

  background-color: ${({ bgColor }) => (bgColor ? bgColor : "transparent")};

  animation: ${rotate} 1s linear infinite;
`;
