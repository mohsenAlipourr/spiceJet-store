import { Html, Head, Main, NextScript } from 'next/document';

const Document = () => {
	return (
		<Html lang='en'>
			<Head>
				<meta name='description' content='spiceJet store' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
};

export default Document;
