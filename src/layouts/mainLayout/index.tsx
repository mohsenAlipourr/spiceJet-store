import { Provider } from 'react-redux';
import { Varela_Round } from '@next/font/google';
import { store } from '@src/store';
import Footer from './footer';
import Header from './header';
import { Main } from './styled';

export const title = Varela_Round({
	subsets: ['latin'],
	weight: ['400'],
});

type MainLayoutProps = {
	children: React.ReactNode;
};

const MainLayout = ({ children }: MainLayoutProps) => {
	return (
		<div className={title.className}>
			<Provider store={store}>
				<Header />
				<Main>{children}</Main>
				<Footer />
			</Provider>
		</div>
	);
};
export default MainLayout;
