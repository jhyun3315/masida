import type { AppProps } from "next/app";
import { useState ,useEffect } from "react";
import  { useRouter } from "next/router";
import { Provider } from 'react-redux';
import "../reset.scss";
import {store, persistor} from '../../store/store';
import { PersistGate } from "redux-persist/integration/react";
import LoadingSpinner from "../pages/loadingSpinner";


//여기서 Provider로 감싸주어 store에 연결시켜줍니다.
export default function App({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState<boolean>();
  const router = useRouter();
  useEffect(() => {
     let timer: ReturnType<typeof setTimeout>;
     const start = () => {
          timer = setTimeout(() => setLoading(true), 1000) // 0.5초 이내에 로딩이 끝나면 스피너 표시하지 않음
        };
        const end = () => {
          clearTimeout(timer);
          setLoading(false)
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
    <>
    {loading && <LoadingSpinner />}
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      {!loading && <Component {...pageProps} />}
      </PersistGate>
    </Provider>
    </>
  )
  
}
