import { InputContainer } from './styled';

type InputProps = {
	radius?: number;
	width?: string | number;
	height?: string | number;
	borderColor?: string | number;
	props?: any;
	name?: string | number | null;
	value?: string | number;
	onChange?: Function;
	type?: string;
	isRequired?: boolean;
	disabled?: boolean;
	pattern?: undefined;
	placeholder?: string | number;
};

const Input = ({
	name = null,
	value,
	onChange,
	type = 'text',
	radius = 7,
	width = 200,
	height = 40,
	borderColor = '3px solid #e0e0e6',
	isRequired,
	disabled,
	pattern,
	placeholder,
	...props
}: InputProps) => {
	return (
		<InputContainer
			{...props}
			name={name}
			value={value}
			type={type}
			required={isRequired}
			disabled={disabled}
			pattern={pattern}
			placeholder={placeholder}
			onChange={onChange}
			styles={{
				radius,
				width,
				height,
				borderColor,
			}}
		/>
	);
};

export default Input;
