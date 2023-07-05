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
            <li>
              <p>Home</p>
            </li>
            <li>
              <p>Ferramenta</p>
            </li>
            <li>
              <p>Preços</p>
            </li>
            <li>
              <p>Contato</p>
            </li>
          </ul>
        </div>
        <div>
          <h3>Cases</h3>
          <ul>
            <li>
              <p>Geração de Leads B2B</p>
            </li>
            <li>
              <p>Geração de Leads em Software</p>
            </li>
            <li>
              <p>Geração de Leads em Imobilária</p>
            </li>
            <li>
              <p>Cases de Suesso</p>
            </li>
          </ul>
        </div>
        <div>
          <h3>Materiais</h3>
          <ul>
            <li>
              <p>Blog</p>
            </li>
            <li>
              <p>Parceria com Agências</p>
            </li>
            <li>
              <p>Gua Definitivo do Marketing</p>
            </li>
            <li>
              <p>Materiais Gratuitos</p>
            </li>
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
            <li>
              <p>E-mail: contato@leadster.com.br</p>
            </li>
            <li>
              <p>Telefone: (42) 98828-9851</p>
            </li>
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
