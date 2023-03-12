import type { AppProps } from "next/app";
import "../reset.scss";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
