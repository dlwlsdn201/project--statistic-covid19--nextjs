import type { AppProps } from 'next/app';
import { store } from '../store';
import { Provider } from 'react-redux';
import Layout from '../components/Layout';
import React from 'react';
import 'antd/dist/antd.css';
import '../styles/index.scss';
import '../styles/dashboard/index.scss';
import '../styles/404/index.scss';

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

// getServerSideProps 가 호출되었을 때, App 의 getInitialProps 가 재호출 되는 이슈를 막기 위함
// MyApp.getInitialProps = async (appContext: any) => {
// 	const appProps = await App.getInitialProps(appContext);
// 	const {
// 		ctx: { req }
// 	} = appContext;

// 	if (req?.url.startsWith('/_next')) {
// 		// serverSideProps로 호출된 경우 URL이 /_next로 시작함.
// 		// EX: /_next/data/development/index.json
// 	}

// 	return { ...appProps };
// };

export default MyApp;
