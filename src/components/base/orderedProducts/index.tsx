import Image from 'next/image';
import image from 'public/images/product.png';
import accepted from 'public/icons/accepted.png';

import {
	OrderedProduct,
	OrderedProductDetails,
	OrderedProductName,
	Price,
	PriceProduct,
	Total,
	Wrapper,
} from './styled';

type ProductSlideProps = {
	list?: any;
};

const OrderedProducts = ({ list }: ProductSlideProps) => {
	return (
		<>
			{!list ? (
				list.map((item: any, index: any) => (
					<Wrapper key={index}>
						<OrderedProduct>
							<Image src={image} alt='image' width={150} height={150} />

							<OrderedProductDetails>
								<OrderedProductName>{item.title}</OrderedProductName>

								<PriceProduct>
									<Total>Total:</Total>
									<Price> {item.total}</Price>
								</PriceProduct>
							</OrderedProductDetails>
						</OrderedProduct>

						<Image src={accepted} alt='accepted' />
					</Wrapper>
				))
			) : (
				<h3>There is no order</h3>
			)}
		</>
	);
};

export default OrderedProducts;
