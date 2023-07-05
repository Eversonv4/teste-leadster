import styled from "styled-components";
import { IButtonActiveProps, IPageProps } from "./interface";
import { IoMdArrowDropdown } from "react-icons/io";
import { slideUp } from "@shared/animations/styles";

export const MediaContainer = styled.section`
  max-width: 1200px;
  min-height: 1020px;
  margin: 0 auto;
  padding: 80px 0;

  animation: ${slideUp} 0.8s ease-in-out;
`;

export const MediaHeader = styled.div`
  padding-bottom: 25px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border_light};

  display: flex;
  justify-content: space-between;
  align-items: center;

  & > div {
    display: flex;
    align-items: center;
  }

  @media (max-width: 960px) {
    flex-direction: column;
    gap: 20px;
  }

  @media (max-width: 690px) {
    gap: 10px;
    padding: 0 20px;

    & > div {
      flex-wrap: wrap;
      gap: 15px;
      justify-content: center;
    }
  }
`;

export const ButtonCategory = styled.button<IButtonActiveProps>`
  font-size: 14px;
  font-family: ${({ theme }) => theme.fonts.jakarta};
  font-weight: 600;
  width: max-content;

  cursor: pointer;
  transition: 0.3s ease-in-out;

  padding: 8px 15px;
  margin-right: 15px;

  background-color: ${({ theme, isActive }) =>
    isActive ? theme.colors.primary_blue : theme.colors.secondary_white};
  color: ${({ theme, isActive }) =>
    isActive ? theme.colors.secondary_white : theme.colors.text_dark};

  border-radius: 18px;
  border: 1px solid
    ${({ theme, isActive }) =>
      isActive ? theme.colors.primary_blue : theme.colors.text_dark};

  :hover {
    border-color: ${({ theme }) => theme.colors.primary_blue};
    color: ${({ theme, isActive }) =>
      isActive ? theme.colors.secondary_white : theme.colors.primary_blue};
  }

  @media (max-width: 690px) {
    margin-right: 5px;
  }
`;

export const SetOrderContainer = styled.div`
  position: relative;
  & > h3 {
    font-size: 16px;
    font-weight: 600;

    margin-right: 15px;
  }

  & > select {
    padding: 10px;
    padding-right: 25px;

    appearance: none;
    cursor: pointer;
    outline: none;

    font-weight: 600;
    font-family: ${({ theme }) => theme.fonts.jakarta};
    color: ${({ theme }) => theme.colors.text_dark};

    border-radius: 10px;
    border-color: ${({ theme }) => theme.colors.text_dark};

    background-color: transparent;
  }

  & > select > option {
    color: ${({ theme }) => theme.colors.text_dark};
    font-size: 14px;
    font-weight: 400;
  }

  @media (max-width: 690px) {
    margin-bottom: 30px;
  }
`;

export const ArrowDownSelect = styled(IoMdArrowDropdown)`
  position: absolute;
  right: 5px;
  top: 11px;
  z-index: -1;

  font-size: 20px;

  color: ${({ theme }) => theme.colors.text_dark};

  @media (max-width: 326px) {
    top: 46px;
    right: 65px;
  }
`;

export const PaginationContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  margin-top: 30px;

  display: flex;
  align-items: center;
  justify-content: center;

  & > span {
    font-size: 20px;
    margin-right: 18px;
    font-weight: 700;
  }

  & > ul {
    display: flex;
  }
`;

export const Page = styled.li<IPageProps>`
  font-size: 18px;
  font-weight: 700;
  color: ${({ isActive, theme }) =>
    isActive ? theme.colors.primary_blue : theme.colors.text_dark};
  padding: 8px 14px;
  cursor: pointer;
  box-sizing: content-box;
  margin-right: 4px;
  border-radius: 6px;
  border: 1px solid
    ${({ isActive, theme }) =>
      isActive ? theme.colors.primary_blue : "transparent"};

  :hover {
    background-color: ${({ theme }) => theme.colors.primary_blue_light};
  }
`;
