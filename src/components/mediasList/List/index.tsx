import { useEffect, useState } from "react";
import { IListItemProps } from "../mediaItem/interface";
import { MediaListContainer } from "./styles";
import { IMediaListProps } from "./interface";
import { MediaItem } from "../mediaItem";

export function MediasList({
  DataList,
  currentPage,
  limitPerPage,
  order,
}: IMediaListProps) {
  const [activePage, setActivePage] = useState(1);

  useEffect(() => {
    setActivePage((currentPage - 1) * limitPerPage);
  }, [DataList, currentPage, order]);
  return (
    <MediaListContainer>
      {DataList &&
        DataList.slice(activePage, limitPerPage * currentPage).map(
          (item: IListItemProps) => (
            <MediaItem
              key={item.title}
              title={item.title}
              url={item.url}
              description={item.description}
              date={item.date}
            />
          )
        )}
    </MediaListContainer>
  );
}
