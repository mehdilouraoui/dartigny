import '../styles/index.scss';
import type { AppProps } from 'next/app';
import { useWindowSize } from '../hooks/useWindowSize';

function MyApp({ Component, pageProps }: AppProps) {
    useWindowSize();
    return <Component {...pageProps} />;
}

export default MyApp;
