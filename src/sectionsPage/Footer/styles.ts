import styled from "styled-components";
import { FaLinkedinIn, FaFacebookF, FaInstagram } from "react-icons/fa";
import { slideUp } from "@shared/animations/styles";

export const FooterContainer = styled.footer`
  animation: ${slideUp} 0.8s ease-in-out;

  & > img {
    display: block;
    margin: 48px auto 5px;
  }

  & > p {
    font-family: ${({ theme }) => theme.fonts.jakarta};
    font-size: 12px;
    line-height: 16px;
    color: ${({ theme }) => theme.colors.text_dark};
    text-align: center;
  }
`;

export const FooterLinksContainer = styled.div`
  max-width: 1200px;
  margin: 48px auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  & > div > h3 {
    font-size: 16px;
    line-height: 20px;
    color: ${({ theme }) => theme.colors.text_dark};
  }

  & > div > ul {
    margin-top: 48px;
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  & > div > ul > li > p {
    color: ${({ theme }) => theme.colors.dark_gray};
    font-size: 14px;
    line-height: 18px;
    font-weight: 500;

    :hover {
      opacity: 0.7;
    }
  }

  @media (max-width: 960px) {
    padding: 0 20px;
  }

  @media (max-width: 868px) {
    flex-wrap: wrap;

    & > div {
      margin-bottom: 30px;
    }
  }

  @media (max-width: 440px) {
    align-items: center;

    & > div {
      width: 100%;
    }

    & > div > h3 {
      text-align: center;
    }

    & > div > ul > li > p {
      text-align: center;
    }
  }
`;

export const IconsContainer = styled.div`
  display: flex;
  gap: 15px;

  & > button {
    display: flex;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.dark_gray + "44"};
    color: ${({ theme }) => theme.colors.dark_gray};
    border: none;

    font-size: 18px;

    border-radius: 50%;

    padding: 16px;

    :hover {
      opacity: 0.7;
    }
  }

  @media (max-width: 440px) {
    justify-content: center;
  }
`;

export const LinkedInIcon = styled(FaLinkedinIn)`
  color: inherit;
`;
export const FacebookIcon = styled(FaFacebookF)`
  color: inherit;
`;
export const InstagramIcon = styled(FaInstagram)`
  color: inherit;
`;

export const BottomFooterContainer = styled.div`
  border-top: 1px solid ${({ theme }) => theme.colors.border_light};
  margin-top: 70px;
`;

export const BottomLayoutContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  max-width: 1200px;
  margin: 0 auto;

  padding: 36px 0;

  gap: 20px;

  & > p {
    color: ${({ theme }) => theme.colors.dark_gray};
    font-size: 14px;
    line-height: 18px;

    & > span {
      color: ${({ theme }) => theme.colors.primary_blue};
    }
  }

  @media (max-width: 960px) {
    padding: 36px 20px;
  }

  @media (max-width: 565px) {
    flex-direction: column;

    & > p {
      text-align: center;
    }
  }
`;
