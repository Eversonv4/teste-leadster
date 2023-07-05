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

  @media (max-width: 960px) {
    & > div > img {
      max-width: 400px;
      max-height: 380px;
      padding-left: 20px;
    }
  }

  @media (max-width: 868px) {
    flex-direction: column;
    gap: 30px;
  }

  @media (max-width: 580px) {
    & > div > img {
      padding-left: 0px;
    }
  }

  @media (max-width: 430px) {
    & > div > img {
      max-width: 280px;
      max-height: 260px;
    }
  }
`;

export const DetailsContainer = styled.div`
  color: ${({ theme }) => theme.colors.text_dark};

  @media (max-width: 960px) {
    max-width: 55%;
    padding-right: 20px;
  }

  @media (max-width: 580px) {
    max-width: 80%;
    padding-right: 0px;
  }
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

  @media (max-width: 430px) {
    & > h2 {
      font-size: 26px;
      line-height: 32px;
      text-align: center;
    }

    & > h3 {
      font-size: 14px;
      line-height: 18px;
      text-align: center;
    }
  }
`;

export const SealContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  margin: 20px 0;

  & > button {
    min-width: fit-content;
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

  @media (max-width: 580px) {
    & > button {
      font-size: 14px;
    }
  }

  @media (max-width: 420px) {
    & > button {
      font-size: 14px;
      padding: 10px 15px;
    }

    flex-direction: column;
    gap: 20px;
  }
`;

export const RatingTitle = styled.div`
  display: flex;
  align-items: center;

  font-size: 14px;
  line-height: 18px;
  font-family: ${({ theme }) => theme.fonts.jakarta};

  & > p {
    display: flex;
    align-items: center;
  }

  & > p > img {
    margin-right: 5px;
  }

  & > span {
    font-weight: 500;
    margin: 0 5px;
  }

  @media (max-width: 750px) {
    flex-direction: column;
    gap: 5px;

    & > span {
      display: none;
    }
  }
`;
