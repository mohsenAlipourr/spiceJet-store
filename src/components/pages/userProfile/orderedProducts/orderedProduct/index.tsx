import Image from 'next/image';
import { Wrapper, OrderedProductDetails, OrderedProductName, Price, PriceProduct, Total } from './styled';

const OrderedProduct = ({ products }: any) => {
	return (
		<>
			{products.map((item: any, index: any) => (
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
