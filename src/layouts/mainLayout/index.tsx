import Footer from './footer';
import Header from './header';
import { Main } from './styled';
import { Varela_Round } from '@next/font/google';

export const title = Varela_Round({
	subsets: ['latin'],
	weight: ['400'],
});

type MainLayoutProps = {
	children: any;
};

const MainLayout = ({ children }: MainLayoutProps) => {
	return (
		<div className={title.className}>
			<Header />
			<Main>{children}</Main>
			<Footer />
		</div>
	);
};
export default MainLayout;
