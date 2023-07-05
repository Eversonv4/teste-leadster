import Image from "next/image";
import {
  ComparativeContainer,
  ContainerLayout,
  DetailsContainer,
  RatingTitle,
  SealContainer,
  TitleContainer,
} from "./styles";

export function ComparativeSection() {
  return (
    <ComparativeContainer>
      <ContainerLayout>
        <div>
          <Image
            src="/assets/company/comparativo_CTA.png"
            alt="comparative leads generated in 14 days"
            height="550"
            width="600"
            loading="lazy"
          />
        </div>
        <DetailsContainer>
          <TitleContainer>
            <h2>
              Pronto para triplicar sua <br />
              <strong>Geração de Leads?</strong>
            </h2>
            <h3>
              Criação e ativação em <strong>4 minutos.</strong>
            </h3>
          </TitleContainer>
          <SealContainer>
            <button>VER DEMONSTRAÇÃO</button>
            <Image
              src="/assets/company/selo_RD.png"
              height="50"
              width="150"
              alt="RD seal"
              loading="lazy"
            />
          </SealContainer>
          <RatingTitle>
            <p>
              <img src="/assets/company/no-card-dark.webp" alt="no card icon" />
              Não é necessário Cartão de Crédito
            </p>
            <span> | </span>
            <p>
              <img src="/assets/company/rating.webp" alt="rating" />
              4.9/5 média de satisfação
            </p>
          </RatingTitle>
        </DetailsContainer>
      </ContainerLayout>
    </ComparativeContainer>
  );
}
