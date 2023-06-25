import Image from 'next/image';
import filter from 'public/icons/filter.png';
import ProductCategory from '@src/components/base/categoryProducts';
/* import Input from '@src/components/base/input';
 */ import { FilterProducts, ProductContent, Products, /*  Search, Sidebar, */ Wrapper } from './styled';

const CategoryProduct = ({ data }: any) => {
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

			{/* <Sidebar>
				<Search>
					<span>Search</span>
					<Input />
				</Search>

				<div>
					<span>Price range</span>
				</div>

				<div>
					<span>Category</span>
				</div>
			</Sidebar> */}
		</Wrapper>
	);
};

export default CategoryProduct;
