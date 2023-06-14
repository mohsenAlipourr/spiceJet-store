import Image from 'next/image';
import filter from 'public/icons/filter.png';
import ProductCategory from '@src/components/base/categoryProducts';
import Input from '@src/components/base/input';
import { HeaderCategory, Search, Sidebar, Wrapper } from './styled';

const CategoryProduct = () => {
	const list = [
		{ title: 'masalas', price: '$560' },
		{ title: 'masalas', price: '$560' },
		{ title: 'masalas', price: '$560' },
		{ title: 'masalas', price: '$560' },
		{ title: 'masalas', price: '$560' },
		{ title: 'masalas', price: '$560' },
	];

	return (
		<Wrapper>
			<div>
				<HeaderCategory>
					<p>
						Showing {} of {} product
					</p>
					<div>
						<span>Filter</span>
						<Image src={filter} alt='filter' width={18} height={18} />
					</div>
				</HeaderCategory>

				<ProductCategory list={list} />
			</div>

			<Sidebar>
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
			</Sidebar>
		</Wrapper>
	);
};

export default CategoryProduct;
