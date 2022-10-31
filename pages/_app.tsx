import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { store } from '../store';
import { Provider } from 'react-redux';
import Layout from '../components/Layout';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<div className='root-container'>
			<Provider store={store}>
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</Provider>
		</div>
	);
}

export default MyApp;
