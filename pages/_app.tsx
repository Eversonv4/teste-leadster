import Head from "next/head";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { Theme } from "@shared/globalTheme";
import { GlobalStyle } from "@shared/globalStyle";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <Head>
        <title>Leadster - Home</title>
        <meta
          name="description"
          content="Conheça a Leadster, um Chatbot de Marketing Conversacional para Aumentar a Geração de Leads Qualificados no seu Site. Visite e saiba mais!"
        />
        <meta name="author" content="Leadster" />
        <meta property="og:image" content="/assets/company/logo.png" />
      </Head>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
