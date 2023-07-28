import Image, { StaticImageData } from 'next/image';
import { Wrapper, OrderedProductDetails, OrderedProductName, Price, PriceProduct, Total } from './styled';

type OrderType = {
	products: [];
};
type OrderedProductType = {
	category: string;
	description: [];
	id: string;
	images: StaticImageData[];
	price: number;
	score: number;
	summery: string;
	title: string;
	total: number;
};

const OrderedProduct = ({ products }: OrderType) => {
	return (
		<>
			{products.map((item: OrderedProductType, index: number) => (
				<Wrapper key={index}>
					<Image src={item.images[0]} alt='image' width={150} height={150} />

					<OrderedProductDetails>
						<OrderedProductName>{item.title}</OrderedProductName>

						<PriceProduct>
							<Total>Total:</Total>
							<Price> {item.total}</Price>
						</PriceProduct>

						<PriceProduct>
							<Total>TotalPrice:</Total>
							<Price> {`$${item.price * item.total}`}</Price>
						</PriceProduct>
					</OrderedProductDetails>
				</Wrapper>
			))}
		</>
	);
};

export default OrderedProduct;
