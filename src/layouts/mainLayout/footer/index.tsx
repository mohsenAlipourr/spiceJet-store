import Image from 'next/image';
import Link from 'next/link';
import logo from 'public/images/logo.png';
import mail from 'public/icons/mail.png';
import phone from 'public/icons/phone.png';
import {
	DivContent,
	DivContentUs,
	DivLogo,
	FooterContent,
	FooterTitle,
	FooterWrapper,
	PContent,
	SpanContentUs,
} from './styled';

const Footer = () => {
	return (
		<FooterContent>
			<FooterWrapper>
				<DivLogo>
					<Link href='/'>
						<Image src={logo} alt='logo' />
					</Link>
				</DivLogo>

				<DivContent>
					<div>
						<FooterTitle>About us</FooterTitle>
						<PContent>
							Pellentesque posuere orci lobortis scelerisque blandit. Donec id telus lacinia an, tincidunt risus ac.
						</PContent>
					</div>

					<div>
						<FooterTitle>Contact us</FooterTitle>

						<DivContentUs>
							<Image src={mail} alt='mail' />
							<SpanContentUs>09102416098</SpanContentUs>
						</DivContentUs>

						<DivContentUs>
							<Image src={phone} alt='phone' />
							<SpanContentUs>mail@example.com</SpanContentUs>
						</DivContentUs>
					</div>
				</DivContent>
			</FooterWrapper>
		</FooterContent>
	);
};
export default Footer;
