import type { AppProps } from "next/app";
import { Provider } from 'react-redux';
import "../reset.scss";
import {store, persistor} from '../../store/store';
import { PersistGate } from "redux-persist/integration/react";

//여기서 Provider로 감싸주어 store에 연결시켜줍니다.
export default function App({ Component, pageProps }: AppProps) {
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
