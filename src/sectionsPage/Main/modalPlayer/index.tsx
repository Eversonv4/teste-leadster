import { IListItemProps, IModalProps } from "./interface";
import {
  CloseIcon,
  CloudIcon,
  ContainerBlur,
  ContainerSection,
  DescriptionContainer,
  DownloadButton,
  DownloadsContainer,
  ExportFilesContainer,
  TitleVideoHeader,
} from "./styles";

export function ModalPlayer({
  title,
  url,
  description,
  date,
  closeModal,
}: IModalProps) {
  const [, param] = url.split("v=");
  return (
    <ContainerBlur>
      <ContainerSection>
        <CloseIcon onClick={closeModal} />
        <TitleVideoHeader>
          <h2>
            <span>Webinar:</span> {title}
          </h2>
          <iframe
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${param}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </TitleVideoHeader>

        <DescriptionContainer>
          <h2>Descrição</h2>
          {description && <h3>{description}</h3>}
          {!description && <h3>Sem Descrição</h3>}
        </DescriptionContainer>

        <DownloadsContainer>
          <h2>Downloads</h2>
          <div>
            <DownloadButton color="#00ae7f">
              <CloudIcon color="#00ae7f" />
              Spreadsheet.xls
            </DownloadButton>
            <DownloadButton color="#007eff">
              <CloudIcon color="#007eff" />
              Document.doc
            </DownloadButton>
            <DownloadButton color="#a68e1c">
              <CloudIcon color="#a68e1c" />
              Presentation.ppt
            </DownloadButton>
          </div>
        </DownloadsContainer>
      </ContainerSection>

      <ExportFilesContainer>
        <DownloadButton color="#00ae7f">
          <CloudIcon color="#00ae7f" />
          Spreadsheet.xls
        </DownloadButton>
        <DownloadButton color="#007eff">
          <CloudIcon color="#007eff" />
          Document.doc
        </DownloadButton>
        <DownloadButton color="#a68e1c">
          <CloudIcon color="#a68e1c" />
          Presentation.ppt
        </DownloadButton>
        <DownloadButton color="#77848c">
          <CloudIcon color="#77848c" />
          Folder.zip
        </DownloadButton>
      </ExportFilesContainer>
    </ContainerBlur>
  );
}
