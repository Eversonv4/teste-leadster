import Image from "next/image";
import {
  BottomFooterContainer,
  BottomLayoutContainer,
  FacebookIcon,
  FooterContainer,
  FooterLinksContainer,
  IconsContainer,
  InstagramIcon,
  LinkedInIcon,
} from "./styles";

export function Footer() {
  return (
    <FooterContainer>
      <Image
        src="/assets/company/leadster.gif"
        alt="logo company animated"
        height="62"
        width="270"
        loading="lazy"
      />
      <p>Transformando visitantes em clientes.</p>

      <FooterLinksContainer>
        <div>
          <h3>Links Principais</h3>
          <ul>
            <li>Home</li>
            <li>Ferramenta</li>
            <li>Preços</li>
            <li>Contato</li>
          </ul>
        </div>
        <div>
          <h3>Cases</h3>
          <ul>
            <li>Geração de Leads B2B</li>
            <li>Geração de Leads em Software</li>
            <li>Geração de Leads em Imobilária</li>
            <li>Cases de Suesso</li>
          </ul>
        </div>
        <div>
          <h3>Materiais</h3>
          <ul>
            <li>Blog</li>
            <li>Parceria com Agências</li>
            <li>Gua Definitivo do Marketing</li>
            <li>Materiais Gratuitos</li>
          </ul>
        </div>
        <div>
          <h3>Siga a Leadster</h3>
          <ul>
            <li>
              <IconsContainer>
                <button>
                  <LinkedInIcon />
                </button>
                <button>
                  <FacebookIcon />
                </button>
                <button>
                  <InstagramIcon />
                </button>
              </IconsContainer>
            </li>
            <li>E-mail: contato@leadster.com.br</li>
            <li>Telefone: (42) 98828-9851</li>
          </ul>
        </div>
      </FooterLinksContainer>
      <BottomFooterContainer>
        <BottomLayoutContainer>
          <p>
            Copyright © 2015 - {new Date().getFullYear()} Todos os direitos
            reservados | <span>Leadster</span>
          </p>
          <p>
            Rua José Loureiro, 464 - Centro - Curitiba PR - CEP: 80010-000 |
            Termos de uso
          </p>
        </BottomLayoutContainer>
      </BottomFooterContainer>
    </FooterContainer>
  );
}
