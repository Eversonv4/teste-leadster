import styled from "styled-components";
import { FaPlay } from "react-icons/fa";
import { fadeIn } from "@shared/animations/styles";

export const ItemContainer = styled.li`
  border-radius: 15px;

  cursor: pointer;

  overflow: hidden;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  box-shadow: 5px 5px 25px 1px rgba(0, 0, 0, 0.2);

  :hover {
    & h2 {
      color: ${({ theme }) => theme.colors.primary_blue};
    }

    & > div > span {
      display: flex;
      animation: ${fadeIn} 0.2s ease-in-out;
    }
  }
`;

export const BgImageContainer = styled.div`
  height: 100%;
  width: 100%;
  min-height: 191px;

  background-image: url("/assets/company/thumbnail.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  & > span {
    display: none;
    width: 100%;
    height: 100%;

    justify-content: center;
    align-items: center;

    background-color: ${({ theme }) => theme.colors.primary_blue + "66"};
  }
`;

export const PlayIcon = styled(FaPlay)`
  color: ${({ theme }) => theme.colors.secondary_white};
  font-size: 4rem;
`;

export const TitleMediaContainer = styled.div`
  background-color: white;
  height: 40%;
  width: 100%;

  padding: 18px 30px;

  & > h2 {
    font-size: 16px;
    line-height: 20px;
    transition: 0.2s ease-in-out;

    color: ${({ theme }) => theme.colors.text_dark};

    text-overflow: ellipsis;
    white-space: wrap;
    overflow: hidden;

    max-height: 60px;
    max-width: 313px;
  }
`;
