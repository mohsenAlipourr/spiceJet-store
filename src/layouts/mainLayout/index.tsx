import Footer from './footer';
import Header from './header';
import { Main } from './styled';

type MainLayoutProps = {
	children: any;
};

const MainLayout = ({ children }: MainLayoutProps) => {
	return (
		<>
			<Header />
			<Main>{children}</Main>
			<Footer />
		</>
	);
};
export default MainLayout;
