import Image from 'next/image';
import Button from '@src/components/base/button';
import ProductSlide from '@src/components/base/productsSlide';
import score from 'public/icons/score.png';
import share from 'public/icons/share.png';
import interest from 'public/icons/interest.png';
import image from 'public/images/product.png';
import ProductTabs from './productTabs';
import {
	AlbumImage,
	Description,
	Amount,
	Product,
	Wrapper,
	Price,
	ButtonBuy,
	IconProduct,
	Share,
	ProductName,
	ProductPrice,
} from './styled';

const ProductContent = () => {
	return (
		<>
			<Wrapper>
				<AlbumImage>
					<IconProduct>
						<Image src={interest} alt='interest' width={18} height={18} />

						<Share>
							<Image src={share} alt='share' width={18} height={18} />
						</Share>
					</IconProduct>

					<Image src={image} alt='image' width={300} height={300} />

					<div>
						<Image src={image} alt='image' width={100} height={100} />
						<Image src={image} alt='image' width={100} height={100} />
						<Image src={image} alt='image' width={100} height={100} />
					</div>
				</AlbumImage>

				<Product>
					<ProductName>Rosehip Berries</ProductName>

					<Image src={score} alt='score' />

					<Description>
						Nam tempus turpis at metus scelerisque placerat nulla deumantos solicitud felis. Pellentesque diam dolor,
						elementum etos lobortis des mollis ut risus. Sedcus faucibus an sullamcorper mattis drostique des commodo
						pharetras...
					</Description>

					<ProductPrice>
						<Price>price:</Price>
						<Amount>$579.00</Amount>
					</ProductPrice>

					<ButtonBuy>
						<Button width={'335px'} height={'50px'}>
							Buy now
						</Button>
					</ButtonBuy>
				</Product>
			</Wrapper>

			<ProductTabs />

			<ProductSlide />
		</>
	);
};

export default ProductContent;
