import Image from 'next/image';
import image from 'public/images/product.png';
import loading from 'public/images/loading.gif';
import interest from 'public/icons/interest.png';
import score from 'public/icons/score.png';
import Button from '../button';
import { Product, ProductFavorites, ProductName, ProductPrice, Score } from './styled';

type ProductSlideProps = {
	title?: string;
	list?: any;
};

const ProductCategory = ({ list }: ProductSlideProps) => {
	return (
		<>
			{list ? (
				list.map((item: any, index: any) => (
					<Product key={index}>
						<Image src={image} alt='image' width={225} height={225} />

						<ProductName>{item.title}</ProductName>

						<ProductFavorites>
							<Score>
								<Image src={score} alt='score' width={70} height={17} />
							</Score>

							<Image src={interest} alt='interest' width={18} height={18} />
						</ProductFavorites>

						<ProductPrice>{item.price}</ProductPrice>

						<Button>Add To Cart</Button>
					</Product>
				))
			) : (
				<Image src={loading} alt='loading' />
			)}
		</>
	);
};

export default ProductCategory;
