import Image from 'next/image';
import image from 'public/images/product.png';
import close from 'public/icons/close.png';
import Button from '../button';
import { OrderedProduct, OrderedProductDetails, Total, Wrapper } from './styled';

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
							<div>
								<Button>-</Button>
								<span>1</span>
								<Button>+</Button>
							</div>

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
