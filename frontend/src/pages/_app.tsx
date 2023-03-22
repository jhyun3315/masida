import type { AppProps } from "next/app";
import { useEffect } from "react";
import { Provider } from 'react-redux';
import "../reset.scss";
import {store, persistor} from '../../store/store';
import { PersistGate } from "redux-persist/integration/react";
import AOS from "aos";
import "aos/dist/aos.css";

//여기서 Provider로 감싸주어 store에 연결시켜줍니다.
export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({
      once: false,
    });
  }, []);
  return (
    <>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      <Component {...pageProps} />
      </PersistGate>
    </Provider>
    </>
  )
  
}
