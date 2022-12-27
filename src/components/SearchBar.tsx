import { useRef, useContext, ChangeEvent } from 'react';
import { PlacesContext } from '../context/places/PlacesContext';
import { SearchResults } from './SearchResults';

export const SearchBar = () => {
	const debounceRef = useRef<NodeJS.Timeout>();
	const { searchPlacesByQuery } = useContext(PlacesContext);

	const onQueryChange = (e: ChangeEvent<HTMLInputElement>) => {
		if (debounceRef.current) {
			clearTimeout(debounceRef.current);
		}
		debounceRef.current = setTimeout(() => {
			searchPlacesByQuery(e.target.value);
		}, 350);
	};
	return (
		<div className='search-container'>
			<input
				type='text'
				className='form-control'
				placeholder='search place'
				onChange={onQueryChange}
			/>
			<SearchResults />
		</div>
	);
};
