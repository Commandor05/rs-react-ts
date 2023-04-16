import React, { ChangeEvent } from 'react';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { updatedSearchQuery } from '../redux/features/search/searchSlice';
import { fetchPhotos } from '../redux/features/photos/photosSlice';
import { potosEndpoint } from '../main';

const SEARCH_BUTTON_TITLE = 'Search';

const searchPotosEndpoint = '/search/photos?query=';

const SearchBox: React.FC = () => {
  const dispatch = useAppDispatch();
  const { searchQuery } = useAppSelector((state) => state.search);

  const handleSearch = (searchQuery: string | null) => {
    const endpoint = searchQuery ? `${searchPotosEndpoint}${searchQuery}` : potosEndpoint;
    const dataField = searchQuery ? 'results' : undefined;
    dispatch(fetchPhotos({ endpoint, dataField }));
  };

  const handleSearchClick = () => {
    handleSearch(searchQuery);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(updatedSearchQuery(event.target.value));
    if (!event.target.value) {
      handleSearch(null);
    }
  };

  return (
    <div className="max-w-2xl my-10 mx-auto p-5">
      <div className="container flex self-center justify-self-center w-auto max-w-none shadow-md">
        <input
          className="grow py-3 px-6 rounded-l-md border-2 border-indigo-300"
          type="search"
          id="search"
          value={searchQuery}
          onChange={handleChange}
        />
        <button
          aria-label="search"
          className="py-3 px-6 bg-indigo-600 hover:bg-indigo-700 rounded-r-md text-white"
          onClick={handleSearchClick}
        >
          {SEARCH_BUTTON_TITLE}
        </button>
      </div>
    </div>
  );
};

export default SearchBox;
