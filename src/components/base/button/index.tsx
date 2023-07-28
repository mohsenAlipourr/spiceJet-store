import { ButtonContainer } from './styled';

type ButtonProps = {
	children: string;
	radius?: number;
	color?: string | number;
	background?: string | number;
	width?: string | number;
	height?: string | number;
	disable?: boolean;
	borderColor?: string | number;
	onClick?: Function;
	props?: any;
	fontSize?: number;
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
	fontSize,
	...props
}: ButtonProps) => {
	return (
		<ButtonContainer
			{...props}
			onClick={onClick}
			styles={{
				radius,
				color,
				width,
				height,
				background,
				borderColor,
				disable,
				fontSize,
			}}
		>
			{children}
		</ButtonContainer>
	);
};

export default Button;
