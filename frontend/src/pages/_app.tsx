import type { AppProps } from "next/app";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Provider } from "react-redux";
import "../reset.scss";
import { store, persistor } from "../../store/store";
import { PersistGate } from "redux-persist/integration/react";
import Loading_spinner from "../components/UI/Loading_spinner";

import { wrapper } from "../../store";

//font추가
import { IBM_Plex_Sans_KR } from '@next/font/google'

const ibm = IBM_Plex_Sans_KR({
  subsets: ['latin'],
  weight: '400',
})

//여기서 Provider로 감싸주어 store에 연결시켜줍니다.
function App({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState<boolean>();
  const router = useRouter();
  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    const start = () => {
      timer = setTimeout(() => setLoading(true), 200); // 0.5초 이내에 로딩이 끝나면 스피너 표시하지 않음
    };
    const end = () => {
      clearTimeout(timer);
      setLoading(false);
    };

    router.events.on("routeChangeStart", start);
    router.events.on("routeChangeComplete", end);
    router.events.on("routeChangeError", end);

    return () => {
      router.events.off("routeChangeStart", start);
      router.events.off("routeChangeComplete", end);
      router.events.off("routeChangeError", end);
    };
  }, [router.events]);
  return (
    <div className={ibm.className}>
      {loading && <Loading_spinner />}
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          {!loading && <Component {...pageProps} />}
        </PersistGate>
      </Provider>
    </div>
  );
}
export default wrapper.withRedux(App);