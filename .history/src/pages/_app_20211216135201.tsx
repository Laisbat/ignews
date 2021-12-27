import { AppProps } from "next/app";
import { Header } from "../components/Header";
import "../styles/global.scss";
import { Provider as NextAuthPovider } from "next-auth/client";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NextAuthPovider session={pageProps.session}>
      <Header />
      <Component {...pageProps} />
    </NextAuthPovider>
  );
}

export default MyApp;
