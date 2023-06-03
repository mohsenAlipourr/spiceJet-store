import { Container } from './styled';

type ButtonProps = {
	children: any;
	radius?: number;
	color?: string | number;
	background?: string | number;
	width?: string | number;
	height?: string | number;
	disable?: any;
	borderColor?: string | number;
	onClick?: any;
	props?: any;
};

const Button = ({
	children,
	radius = 7,
	color = '#2b2b71',
	background = 'white',
	width = 100,
	height = 40,
	disable = false,
	borderColor = '3px solid #cf191a',
	onClick,
	...props
}: ButtonProps) => {
	return (
		<Container
			{...props}
			styles={{
				radius,
				color,
				width,
				height,
				background,
				borderColor,
				disable,
			}}
		>
			{children}
		</Container>
	);
};

export default Button;
