import { useEffect, useState } from "react";
import {
  MediaContainer,
  MediaHeader,
  ButtonCategory,
  SetOrderContainer,
  ArrowDownSelect,
  PaginationContainer,
  Page,
} from "./styles";
import { MediasList } from "@components/mediasList/List";
import { TCategory, TOrderMediasProps } from "./interface";
import { DummyData } from "dummy_data";
import { LoadingAnimation } from "@components/LoadingAnimation";
import { IListItemProps } from "@components/mediasList/mediaItem/interface";

export function MediasSection() {
  const [currentCategory, setCurrentCategory] = useState<TCategory>("agencies");
  const [currentOrderMedias, setCurrentOrderMedias] =
    useState<TOrderMediasProps>("date");
  const [currentMediaData, setCurrentMediaData] = useState<IListItemProps[]>(
    DummyData[currentCategory]
  );
  const [showLoading, setShowLoading] = useState(false);

  const [activePage, setActivePage] = useState(1);
  const limitPerPage = 9;
  const [listPaginations, setListPaginations] = useState<number[]>([]);

  function toggleMedias(category: TCategory) {
    setShowLoading(true);
    setActivePage(1);
    setTimeout(() => {
      setCurrentCategory(category);
      setCurrentMediaData(DummyData[category]);
      setShowLoading(false);
    }, 500);
  }

  function countPaginations(totalMedias: number) {
    const totalPaginations =
      totalMedias % limitPerPage === 0
        ? totalMedias / limitPerPage
        : Math.ceil(totalMedias / limitPerPage);

    const paginations = [];
    for (let i = 1; i <= totalPaginations; i++) {
      paginations.push(i);
    }

    setListPaginations(paginations);
  }

  function changeOrderMedias(order: TOrderMediasProps) {
    if (order === currentOrderMedias) return;

    setShowLoading(true);
    setActivePage(1);

    setCurrentOrderMedias(order);

    let orderedMedias;
    if (order === "date") {
      // @ts-ignore
      orderedMedias = currentMediaData.sort((a, b) => a.date - b.date);
    } else {
      // @ts-ignore
      orderedMedias = currentMediaData.sort((a, b) =>
        a.title.localeCompare(b.title)
      );
    }

    setTimeout(() => {
      setShowLoading(false);
    }, 500);

    setCurrentMediaData(orderedMedias);
  }

  function init() {
    countPaginations(currentMediaData.length);
    changeOrderMedias(currentOrderMedias);
  }

  useEffect(() => {
    init();
  }, [currentOrderMedias]);

  return (
    <MediaContainer>
      <MediaHeader>
        <div>
          <ButtonCategory
            isActive={currentCategory === "agencies"}
            onClick={() => toggleMedias("agencies")}
          >
            Agências
          </ButtonCategory>
          <ButtonCategory
            isActive={currentCategory === "chatbot"}
            onClick={() => toggleMedias("chatbot")}
          >
            Chatbot
          </ButtonCategory>
          <ButtonCategory
            isActive={currentCategory === "marketing"}
            onClick={() => toggleMedias("marketing")}
          >
            Marketing Digital
          </ButtonCategory>
          <ButtonCategory
            isActive={currentCategory === "leads"}
            onClick={() => toggleMedias("leads")}
          >
            Geração de Leads
          </ButtonCategory>
          <ButtonCategory
            isActive={currentCategory === "media"}
            onClick={() => toggleMedias("media")}
          >
            Mídia Paga
          </ButtonCategory>
        </div>
        <SetOrderContainer>
          <h3>Ordenar por</h3>
          <select
            onChange={(e) => {
              // @ts-ignore
              changeOrderMedias(e.target.value);
            }}
          >
            <option value="date" defaultValue="">
              Data de Publicação
            </option>
            <option value="abc">Ordem Alfabética</option>
          </select>
          <ArrowDownSelect />
        </SetOrderContainer>
      </MediaHeader>

      {!showLoading && (
        <MediasList
          DataList={currentMediaData}
          limitPerPage={limitPerPage}
          currentPage={activePage}
          order={currentOrderMedias}
        />
      )}

      {showLoading && (
        <div style={{ marginTop: 100 }}>
          <LoadingAnimation size="50px" />
        </div>
      )}

      <PaginationContainer>
        <span>Página</span>
        <ul>
          {listPaginations &&
            listPaginations.map((page: number) => (
              <Page
                key={page}
                onClick={() => setActivePage(page)}
                isActive={page === activePage}
              >
                {page}
              </Page>
            ))}
        </ul>
      </PaginationContainer>
    </MediaContainer>
  );
}
