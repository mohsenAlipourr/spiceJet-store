import Image from 'next/image';
import image from 'public/images/product.png';
import close from 'public/icons/close.png';
import Button from '../button';
import { CounterNumber, OrderedProduct, OrderedProductDetails, ProductCounter, Total, Wrapper } from './styled';

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
							<span>{item.title}</span>

							<ProductCounter>
								<Button borderColor={'none'} width={40} height={35}>
									-
								</Button>

								<CounterNumber>1</CounterNumber>

								<Button borderColor={'none'} width={40} height={35}>
									+
								</Button>
							</ProductCounter>

							<Total>Total:{item.total}</Total>
						</OrderedProductDetails>
					</OrderedProduct>

					<Image src={close} alt='close' />
				</Wrapper>
			))}
		</>
	);
};

export default CartProducts;
