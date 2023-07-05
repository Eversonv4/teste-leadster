import { useState } from "react";
import { ModalPlayer } from "@sectionsPage/Main/modalPlayer";
import {
  BgImageContainer,
  ItemContainer,
  PlayIcon,
  TitleMediaContainer,
} from "./styles";
import { IListItemProps } from "./interface";

export function MediaItem({ title, url, description, date }: IListItemProps) {
  const [showModal, setShowModal] = useState(false);

  function closeModal() {
    setShowModal(false);
  }
  return (
    <>
      <ItemContainer onClick={() => setShowModal(true)}>
        <BgImageContainer>
          <span>
            <PlayIcon />
          </span>
        </BgImageContainer>
        <TitleMediaContainer>
          <h2>{title}</h2>
        </TitleMediaContainer>
      </ItemContainer>
      {showModal && (
        <ModalPlayer
          title={title}
          url={url}
          description={description}
          date={date}
          closeModal={closeModal}
        />
      )}
    </>
  );
}
