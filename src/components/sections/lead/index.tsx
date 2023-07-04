import { MainTitle, SectionContainer } from "./styles";
import Image from "next/image";

export function LeadSection() {
  return (
    <SectionContainer>
      <MainTitle>
        Menos Conversinha, <br />
        <strong>Mais Conversão</strong>
        <Image
          src="/assets/company/semi-logo.png"
          width="36"
          height="26"
          loading="lazy"
          alt="semi-logo"
        />
      </MainTitle>
    </SectionContainer>
  );
}
