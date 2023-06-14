import { DescriptionTabs, Tab, Tabs, Wrapper } from './styled';

const ProductTabs = () => {
	return (
		<Wrapper>
			<Tabs>
				<Tab>Product Description</Tab>
			</Tabs>
			<DescriptionTabs>
				<h3>Description</h3>
				<p>
					Nam tempus turpis at metus scelerisque placerat nulla deumantos solicitud felis. Pellentesque diam dolor,
					elementum etos lobortis des mollis ut risus.
				</p>
				<h3>Lorem ipsum dolor sit amet</h3>
				<p>
					Sonsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
					minim veniam consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
					nulla pariatur. Cupcake ipsum dolor. Sit amet marshmallow topping cheesecake muffin. Halvah croissant candy
					canes bonbon candy.
				</p>

				<h3>Sample Paragraph Text</h3>
				<p>
					Praesent vestibulum congue tellus at fringilla. Curabitur vitae semper sem, eu convallis est. Cras felis nunc
					commodo eu convallis vitae interdum non nisl. convallis nec danos dui. Cras suscipit quam et turpis eleifend
					vitae malesuada magna congue.
				</p>
			</DescriptionTabs>
		</Wrapper>
	);
};

export default ProductTabs;
