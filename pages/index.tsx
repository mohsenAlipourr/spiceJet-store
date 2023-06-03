import Head from 'next/head';
/* import Button from '@base/button';
import Input from '@base/input'; */
import Header from '../src/layouts/header';

const Home = () => {
	return (
		<div>
			<Head>
				<title>spiceJet</title>
			</Head>
			{/* <Button>Add To Cart</Button>
			<Input /> */}
			<Header />
		</div>
	);
};
export default Home;
