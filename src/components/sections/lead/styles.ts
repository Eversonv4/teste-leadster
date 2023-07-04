import styled from "styled-components";

export const SectionContainer = styled.section`
  min-height: 500px;

  background-color: ${({ theme }) => theme.colors.primary_blue_light};

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const HighlightText = styled.h2`
  font-size: 1rem;
  line-height: 1.125rem;

  font-weight: 800;
  color: ${({ theme }) => theme.colors.primary_blue};

  border: 2px solid ${({ theme }) => theme.colors.primary_blue};
  border-radius: 20px 20px 20px 0px;

  padding: 8px 22px;

  transition: 0.4s ease-in;

  :hover {
    background-color: ${({ theme }) => theme.colors.primary_blue};
    border-color: ${({ theme }) => theme.colors.primary_blue_light};
    color: ${({ theme }) => theme.colors.primary_blue_light};
  }
`;

export const MainTitle = styled.h1`
  font-size: 2.5rem;

  font-weight: 500;

  text-align: center;

  border-bottom: 1px solid ${({ theme }) => theme.colors.border_light};

  padding: 18px 30px;

  & > strong {
    position: relative;
    font-size: 4.5rem;
    color: ${({ theme }) => theme.colors.primary_blue};
  }

  & > strong > img {
    position: absolute;
    top: 10px;
    right: -14px;
  }
`;

export const SubTitle = styled.p`
  font-size: 1rem;
  line-height: 1.125rem;

  margin-top: 15px;
`;
