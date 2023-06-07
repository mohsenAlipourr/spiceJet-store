import type { AppProps } from 'next/app';
import MainLayout from '@src/layouts/mainLayout';
import '@src/styles/globals.css';

const App = ({ Component, pageProps }: AppProps) => {
	return (
		<MainLayout>
			<Component {...pageProps} />
		</MainLayout>
	);
};
export default App;
