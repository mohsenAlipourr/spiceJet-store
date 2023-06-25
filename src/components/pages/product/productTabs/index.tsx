import React from 'react';
import { DescriptionTabs, Tab, Tabs, Wrapper } from './styled';

const ProductTabs = ({ data }: any) => {
	return (
		<Wrapper>
			<Tabs>
				<Tab>Product Description</Tab>
			</Tabs>
			<DescriptionTabs>
				{data.map((item: any, index: number) => (
					<React.Fragment key={index}>
						<h3>{item.title}</h3>
						<p>{item.content}</p>
					</React.Fragment>
				))}
			</DescriptionTabs>
		</Wrapper>
	);
};

export default ProductTabs;
