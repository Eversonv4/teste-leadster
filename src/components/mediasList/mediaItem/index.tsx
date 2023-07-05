import {
  BgImageContainer,
  ItemContainer,
  PlayIcon,
  TitleMediaContainer,
} from "./styles";

export interface IListItemProps {
  title: string;
  url: string;
  description: string;
  date: Date;
}

export function MediaItem({ title, url, description, date }: IListItemProps) {
  return (
    <ItemContainer>
      <BgImageContainer>
        <span>
          <PlayIcon />
        </span>
      </BgImageContainer>
      <TitleMediaContainer>
        <h2>{title}</h2>
      </TitleMediaContainer>
    </ItemContainer>
  );
}
