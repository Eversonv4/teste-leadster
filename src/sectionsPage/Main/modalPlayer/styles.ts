import styled from "styled-components";
import { IoMdClose } from "react-icons/io";
import { AiOutlineCloudDownload } from "react-icons/ai";

export const ContainerBlur = styled.div`
  background-color: ${({ theme }) => theme.colors.text_dark + "44"};

  position: fixed;
  top: 0;
  left: 0;
  z-index: 5;

  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 600px) {
    padding: 0 20px;
  }
`;

export const ContainerSection = styled.section`
  background-color: ${({ theme }) => theme.colors.secondary_white};
  border-radius: 18px;

  height: calc(100vh - 10%);
  max-width: 600px;
  width: 100%;

  padding: 30px 0px;

  position: relative;

  @media (max-width: 600px) {
    max-width: 450px;
    height: calc(100vh - 20%);
    overflow: auto;
  }

  @media (max-width: 363px) {
    max-width: 450px;
    height: calc(100vh - 18%);
  }
`;

export const CloseIcon = styled(IoMdClose)`
  position: absolute;
  top: 15px;
  right: 20px;

  font-size: 26px;
  font-weight: 700;

  color: ${({ theme }) => theme.colors.text_dark};

  cursor: pointer;

  box-sizing: content-box;

  padding: 5px;
`;

export const TitleVideoHeader = styled.div`
  & > h2 {
    & > span {
      color: ${({ theme }) => theme.colors.primary_blue};
    }

    margin: 0 auto;
    font-weight: 600;
    text-align: center;
    font-size: 22px;
    padding: 20px;
  }

  & > iframe {
    width: 100%;
  }

  @media (max-width: 600px) {
    & > iframe {
      height: 250px;
      margin: 10px 0;
    }

    & > h2 {
      font-size: 16px;
    }
  }
`;

export const DescriptionContainer = styled.div`
  padding: 15px 20px;
  & > h2 {
    border-bottom: 1px solid ${({ theme }) => theme.colors.border_light};
    color: ${({ theme }) => theme.colors.text_dark};
    font-size: 16px;
    font-weight: 700;
    padding-bottom: 10px;
    margin-bottom: 10px;
  }

  & > h3 {
    font-size: 14px;
    line-height: 20px;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.text_dark};

    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export const DownloadsContainer = styled.div`
  padding: 5px 20px 15px;

  & > h2 {
    border-bottom: 1px solid ${({ theme }) => theme.colors.border_light};
    color: ${({ theme }) => theme.colors.text_dark};
    font-size: 16px;
    font-weight: 700;
    padding-bottom: 10px;
    margin-bottom: 10px;
  }

  & > div {
    display: flex;
    align-items: center;
    justify-content: flex-start;

    @media (max-width: 600px) {
      flex-direction: column;
      align-items: center;
      gap: 10px;
    }
  }
`;

interface ICloudIconProps {
  color: string;
}

export const DownloadButton = styled.button<ICloudIconProps>`
  padding: 0px 10px 0 0;
  border: none;
  display: flex;
  align-items: center;
  font-size: 14px;
  line-height: 18px;
  font-family: ${({ theme }) => theme.fonts.jakarta};
  background-color: ${({ color }) => color + "33"};
  color: ${({ color }) => color};
  overflow: hidden;
  border-radius: 4px;
  margin-right: 10px;
  cursor: pointer;

  :hover {
    background-color: ${({ color }) => color + "22"};

    & > svg {
      background-color: ${({ color }) => color + "22"};
    }
  }
`;

export const CloudIcon = styled(AiOutlineCloudDownload)<ICloudIconProps>`
  color: ${({ color }) => color};
  box-sizing: content-box;
  background-color: ${({ color }) => color + "55"};
  padding: 5px;
  font-size: 18px;
  margin-right: 10px;
`;

export const ExportFilesContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;

  background-color: ${({ theme }) => theme.colors.secondary_white};

  padding: 20px;

  & > button {
    margin-bottom: 10px;

    :last-child {
      margin-bottom: 0;
    }
  }

  @media (max-width: 1020px) {
    display: none;
  }
`;
