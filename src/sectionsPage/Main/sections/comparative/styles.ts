import { slideUp } from "@shared/animations/styles";
import styled from "styled-components";

export const ComparativeContainer = styled.section`
  background-color: ${({ theme }) => theme.colors.primary_blue_light};

  padding: 60px 0;

  position: relative;
  z-index: 1;
  overflow: hidden;

  ::after {
    content: "";
    position: absolute;
    z-index: -1;
    height: 900px;
    width: 900px;
    top: 16rem;
    left: -16rem;

    background-color: ${({ theme }) => theme.colors.primary_blue + "11"};
    transform: rotate(45deg);
    border-radius: 60px;
  }
`;

export const ContainerLayout = styled.div`
  max-width: 1200px;
  margin: 0 auto;

  position: relative;
  z-index: 5;

  display: flex;
  align-items: center;
  justify-content: space-between;

  animation: ${slideUp} 0.8s ease-in-out;
`;

export const DetailsContainer = styled.div`
  color: ${({ theme }) => theme.colors.text_dark};
`;

export const TitleContainer = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.colors.border_light};
  padding-bottom: 20px;

  & > h2 {
    font-size: 36px;
    line-height: 42px;
    font-weight: 500;

    & > strong {
      font-weight: 800;
    }
  }

  & > h3 {
    font-size: 18px;
    line-height: 22px;
    font-weight: 400;

    margin-top: 10px;
  }
`;

export const SealContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  margin: 20px 0;

  & > button {
    background-color: ${({ theme }) => theme.colors.primary_blue};
    color: ${({ theme }) => theme.colors.secondary_white};

    font-weight: 600;
    font-size: 16px;
    font-family: ${({ theme }) => theme.fonts.jakarta};
    padding: 15px 20px;
    border: none;
    border-radius: 24px;

    transition: 0.3s ease-in-out;

    margin-right: 16px;

    &:hover {
      background-color: ${({ theme }) => theme.colors.text_dark};
    }
  }
`;

export const RatingTitle = styled.p`
  display: flex;
  align-items: center;

  font-size: 14px;
  line-height: 18px;
  font-family: ${({ theme }) => theme.fonts.jakarta};

  & > img {
    margin-right: 5px;
  }

  & > span {
    font-weight: 500;
    margin: 0 5px;
  }
`;
