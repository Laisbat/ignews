import { AppProps } from "next/app";
import { Header } from "../components/Header";
import "../styles/global.scss";
import { Provider } from "next-auth/client";

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <Provider session={session}>
      <Header />
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
