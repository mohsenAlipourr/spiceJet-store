import Image, { StaticImageData } from 'next/image';
import ProductSlide from '../../base/productsSlide';
import { BannerFullWidth, DivBanners, DivBannersLeft, DivBannersRight, HomeWrapper } from './styled';
import { HomeDataApiResponse } from '@src/interfaces/home';

type HomeContentProps = {
	data: HomeDataApiResponse;
};
type smallType = {
	alt: string;
	link: StaticImageData;
};

const HomeContent = ({ data }: HomeContentProps) => {
	return (
		<HomeWrapper>
			<BannerFullWidth>
				<Image src={data.slider.link} alt={data.slider.alt} priority={true} />
			</BannerFullWidth>

			<ProductSlide list={data.sliderProducts.bestOffer.list} title={data.sliderProducts.bestOffer.title} />

			<BannerFullWidth>
				<Image src={data.bannerMiddle.link} alt={data.bannerMiddle.alt} />
			</BannerFullWidth>

			<ProductSlide list={data.sliderProducts.bestSelling.list} title={data.sliderProducts.bestSelling.title} />

			<DivBanners>
				<DivBannersLeft>
					{data.bannerBottom.small.map((item: smallType, index: number) => (
						<Image key={index} src={item.link} alt={item.alt} />
					))}
				</DivBannersLeft>

				<DivBannersRight>
					<Image src={data.bannerBottom.medium.link} alt={data.bannerBottom.medium.alt} />
				</DivBannersRight>
			</DivBanners>
		</HomeWrapper>
	);
};

export default HomeContent;
