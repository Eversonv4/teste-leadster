import { fadeIn } from "@shared/animations/styles";
import styled from "styled-components";

export const MediaListContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: minmax(280px, auto);
  gap: 40px;
  padding: 50px 0;

  transition: 0.4s ease-in-out;

  animation: ${fadeIn} 0.4s ease-in-out;

  border-bottom: 1px solid ${({ theme }) => theme.colors.border_light};

  @media (max-width: 960px) {
    padding: 50px 20px;
  }

  @media (max-width: 868px) {
    gap: 20px;
    grid-auto-rows: minmax(248px, auto);
  }

  @media (max-width: 754px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
    max-width: 400px;
    margin: 0 auto;
  }
`;
