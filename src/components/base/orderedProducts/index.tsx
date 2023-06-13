import Image from 'next/image';
import image from 'public/images/product.png';
import accepted from 'public/icons/accepted.png';

import { OrderedProduct, OrderedProductDetails, Total, Wrapper } from './styled';

type ProductSlideProps = {
	list?: any;
};

const OrderedProducts = ({ list }: ProductSlideProps) => {
	return (
		<>
			{list.map((item: any, index: any) => (
				<Wrapper key={index}>
					<OrderedProduct>
						<Image src={image} alt='image' width={150} height={150} />

						<OrderedProductDetails>
							<span>{item.title}</span>

							<Total>Total:{item.total}</Total>
						</OrderedProductDetails>
					</OrderedProduct>

					<Image src={accepted} alt='accepted' />
				</Wrapper>
			))}
		</>
	);
};

export default OrderedProducts;
