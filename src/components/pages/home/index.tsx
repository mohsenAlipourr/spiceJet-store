import Image from 'next/image';
import banner1 from 'public/images/baner1.png';
import banner2 from 'public/images/baner2.png';
import banner3 from 'public/images/baner3.png';
import banner4 from 'public/images/baner4.png';
import banner5 from 'public/images/baner5.png';
import ProductSlide from '../../base/productsSlide';
import { BannerFullWidth, DivBanners, DivBannersLeft, DivBannersRight, HomeWrapper } from './styled';
import { HomeDataApiResponse } from '@src/interfaces/home';

type HomeContentProps = {
	data: HomeDataApiResponse;
};

const HomeContent = ({ data }: HomeContentProps) => {
	/* 	const bannerBottom = data.bannerBottom.small;
	 */
	return (
		<HomeWrapper>
			<BannerFullWidth>
				<Image src={banner1 /* data.slider.link */} alt='data.slider.alt' priority={true} />
			</BannerFullWidth>

			<ProductSlide
				list={data.sliderProducts.bestOffer.list}
				title={data.sliderProducts.bestOffer.title}
			></ProductSlide>

			<BannerFullWidth>
				<Image src={banner2 /* data.bannerMiddle.link */} alt='baner' />
			</BannerFullWidth>

			<ProductSlide
				/* list={data.sliderProducts.bestSelling.list}*/
				title={data.sliderProducts.bestSelling.title}
			></ProductSlide>

			<DivBanners>
				<DivBannersLeft>
					{/* {bannerBottom.map((item: any, index: any) => (
						<Image key={index} src={item.link} alt={item.alt} />
					))} */}
					<Image src={banner3 /* data.bannerMiddle.link */} alt='baner' />
					<Image src={banner4 /* data.bannerMiddle.link */} alt='baner' />
				</DivBannersLeft>

				<DivBannersRight>
					<Image src={banner5 /* data.bannerMiddle.link */} alt='baner' />
				</DivBannersRight>
			</DivBanners>
		</HomeWrapper>
	);
};

export default HomeContent;
