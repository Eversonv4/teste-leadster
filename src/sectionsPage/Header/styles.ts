import { fadeIn } from "@shared/animations/styles";
import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;

  animation: ${fadeIn} 0.8s ease-in-out;

  & > img {
    margin: 32px 0;
    width: 170px;
    height: 36px;
  }
`;
