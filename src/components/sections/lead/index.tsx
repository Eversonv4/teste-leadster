import { HighlightText, MainTitle, SectionContainer, SubTitle } from "./styles";
import Image from "next/image";

export function LeadSection() {
  return (
    <SectionContainer>
      <HighlightText>WEBNARS EXCLUSIVOS</HighlightText>
      <MainTitle>
        Menos Conversinha, <br />
        <strong>
          Mais Conversão
          <Image
            src="/assets/company/semi-logo.png"
            width="40"
            height="30"
            loading="lazy"
            alt="semi-logo"
          />
        </strong>
      </MainTitle>
      <SubTitle>
        Conheça as estratégias que <strong>mudaram o jogo</strong> e como
        aplicá-las no seu negócio
      </SubTitle>
    </SectionContainer>
  );
}
