import { useState } from 'react';
import Image from 'next/image';
import logo from 'public/images/logo.png';
import Button from '@src/components/base/button';
import Input from '@src/components/base/input';
import { Form, FormButton, LoginWrapper, Logo, Password, Register } from './style';

const LoginPage = () => {
	const [inputValues, setInputValues] = useState({
		email: '',
		password: '',
	});

	const handleChange = (e: any) => {
		const { name, value } = e.target;

		setInputValues((prev) => {
			return {
				...prev,
				[name]: value,
			};
		});
	};

	return (
		<LoginWrapper>
			<Register>
				<Logo>
					<Image src={logo} alt='logo' />
				</Logo>

				<p>Hello !</p>
				<p>Please enter your name and email.</p>

				<Form>
					<Input
						width={'335px'}
						height={'50px'}
						placeholder='email'
						name='email'
						value={inputValues.email}
						onChange={handleChange}
					/>
					<Password>
						<Input
							width={'335px'}
							height={'50px'}
							name='password'
							placeholder='password'
							value={inputValues.password}
							onChange={handleChange}
						/>
					</Password>

					<FormButton>
						<Button width={'335px'} height={'50px'}>
							Login
						</Button>
					</FormButton>
				</Form>
			</Register>
		</LoginWrapper>
	);
};

export default LoginPage;
