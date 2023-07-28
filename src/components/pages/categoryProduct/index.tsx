import Image from 'next/image';
import Link from 'next/link';
import filter from 'public/icons/filter.png';
import Input from '@src/components/base/input';
import ProductCategory from './ProductCategory';
import { routes } from '@src/constants/routes';
import {
	CategoryFilter,
	FilterProducts,
	PriceRange,
	ProductContent,
	Products,
	Search,
	Sidebar,
	Wrapper,
} from './styled';

type CategoryProductType = {
	data: [];
};

const CategoryProduct = ({ data }: CategoryProductType) => {
	const listCategory = [
		{ title: 'masalas', link: 'masalas' },
		{ title: 'chat masalas', link: 'chat-masalas' },
		{ title: 'pepper Powder', link: 'pepper-Powder' },
		{ title: 'cooking Essentials', link: 'cooking-essentials' },
		{ title: 'refund Oil', link: 'refund-oil' },
	];

	return (
		<Wrapper>
			<ProductContent>
				<FilterProducts>
					<p>
						Showing {data.length} of {data.length} product
					</p>
					<div>
						<span>Filter</span>
						<Image src={filter} alt='filter' width={18} height={18} />
					</div>
				</FilterProducts>

				<Products>
					<ProductCategory list={data} />
				</Products>
			</ProductContent>

			<Sidebar>
				<Search>
					<span>Search</span>
					<Input borderColor={'2px solid #cb1213'} />
				</Search>

				<div>
					<span>Price range</span>

					<PriceRange />
				</div>

				<div>
					<span>Category</span>
					<CategoryFilter>
						{listCategory.map((item, index) => (
							<Link href={routes.category(item.link)} key={index}>
								<span key={index}>{item.title}</span>
							</Link>
						))}
					</CategoryFilter>
				</div>
			</Sidebar>
		</Wrapper>
	);
};

export default CategoryProduct;
