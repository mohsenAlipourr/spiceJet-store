import { useEffect, useState, ChangeEvent, FormEvent } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import logo from 'public/images/logo.png';
import Button from '@src/components/base/button';
import Input from '@src/components/base/input';
import { postAuth } from '@src/api/auth';
import { routes } from '@src/constants/routes';
import { updateGlobalSlice } from '../../../store/globalSlice';
import { Form, FormButton, LoginDescription, LoginWrapper, Logo, Password, Register } from './style';

const LoginPage = () => {
	const dispatch = useDispatch();

	const [inputValues, setInputValues] = useState({
		email: '',
		password: '',
	});
	const router = useRouter();

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;

		setInputValues((prev) => {
			return {
				...prev,
				[name]: value,
			};
		});
	};

	const handleSubmitForm = async () => {
		const response = await postAuth(inputValues.email, inputValues.password);

		if (response.status === 201) {
			dispatch(updateGlobalSlice(inputValues));
			router.push(routes.home);
		}
	};

	const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
	};

	useEffect(() => {
		const email = localStorage.getItem('email');
		const password = localStorage.getItem('password');

		if (email && password) {
			router.push(routes.home);
		}
	}, []);

	return (
		<LoginWrapper>
			<Register>
				<Logo>
					<Image src={logo} alt='logo' />
				</Logo>

				<LoginDescription>
					<p>Hello !</p>
					<p>Please enter your name and email.</p>
				</LoginDescription>

				<Form onSubmit={handleSubmit}>
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
							type={'password'}
							value={inputValues.password}
							onChange={handleChange}
						/>
					</Password>

					<FormButton>
						<Button width={'335px'} height={'50px'} onClick={handleSubmitForm}>
							Login
						</Button>
					</FormButton>
				</Form>
			</Register>
		</LoginWrapper>
	);
};

export default LoginPage;
