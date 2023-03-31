import React, { ChangeEvent, useEffect, useState } from 'react';
import LocalStorage from '../utils/LocalStorage';
import { Storage, StorageKey } from '../types/Storage';

const SEARCH_BUTTON_TITLE = 'Search';

type SearchBoxProps = {
  handleSearch: (searchValue: string) => void;
};

const SearchBox: React.FC<SearchBoxProps> = ({ handleSearch }) => {
  const localStorage: Storage = LocalStorage.getInstance();
  const storedSearchValue = localStorage.getData(StorageKey.searchQuery) as string;
  const storedSearchIsApplied = localStorage.getData(StorageKey.searchIsApplied) as boolean;
  const [searchValue, setSearchValue] = useState<string>(storedSearchValue || '');
  const [searchIsApplied, setSearchIsApplied] = useState<boolean>(storedSearchIsApplied || false);

  useEffect(() => {
    if (searchIsApplied) {
      handleSearch(searchValue);
    }

    return () => {
      localStorage.setData(StorageKey.searchQuery, searchValue);
      localStorage.setData(StorageKey.searchIsApplied, searchIsApplied);
    };
  });

  const handleSearchClick = () => {
    handleSearch(searchValue);
    setSearchIsApplied(true);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
    setSearchIsApplied(false);
    if (!event.target.value) {
      handleSearch(event.target.value);
      setSearchIsApplied(true);
    }
  };

  return (
    <div className="max-w-2xl my-10 mx-auto p-5">
      <div className="container flex self-center justify-self-center w-auto max-w-none shadow-md">
        <input
          className="grow py-3 px-6 rounded-l-md border-2 border-indigo-300"
          type="search"
          id="search"
          value={searchValue}
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
