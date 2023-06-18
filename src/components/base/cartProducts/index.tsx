import Image from 'next/image';
import image from 'public/images/product.png';
import close from 'public/icons/close.png';
import Button from '../button';
import {
	CounterNumber,
	OrderedProduct,
	OrderedProductDetails,
	Price,
	ProductCounter,
	ProductName,
	PriceProduct,
	Wrapper,
	Total,
} from './styled';

type ProductSlideProps = {
	list?: any;
};

const CartProducts = ({ list }: ProductSlideProps) => {
	return (
		<>
			{list.map((item: any, index: any) => (
				<Wrapper key={index}>
					<OrderedProduct>
						<Image src={image} alt='image' width={150} height={150} />

						<OrderedProductDetails>
							<ProductName>{item.title}</ProductName>

							<ProductCounter>
								<Button borderColor={'none'} width={40} height={35}>
									-
								</Button>

								<CounterNumber>1</CounterNumber>

								<Button borderColor={'none'} width={40} height={35}>
									+
								</Button>
							</ProductCounter>

							<PriceProduct>
								<Total>Total:</Total>
								<Price>{item.total}</Price>
							</PriceProduct>
						</OrderedProductDetails>
					</OrderedProduct>

					<Image src={close} alt='close' />
				</Wrapper>
			))}
		</>
	);
};

export default CartProducts;
