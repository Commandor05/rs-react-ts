import React, { ChangeEvent, Component } from 'react';
import LocalStorage from '../utils/LocalStorage';
import { Storage, StorageKey } from '../types/Storage';

const SEARCH_BUTTON_TITLE = 'Search';

type SearchBoxProps = {
  handleSearch: (searchValue: string) => void;
};

type SearchBoxState = {
  searchValue: string;
};

class SearchBox extends Component<SearchBoxProps, SearchBoxState> {
  localSstorage: Storage = LocalStorage.getInstance();

  state: SearchBoxState = {
    searchValue: '',
  };

  componentDidMount() {
    const searchValue = this.localSstorage.getData(StorageKey.searchQuery) as string;
    if (searchValue) {
      this.setState({ searchValue: searchValue });
      this.props.handleSearch(searchValue);
    }
  }

  componentWillUnmount() {
    this.localSstorage.setData(StorageKey.searchQuery, this.state.searchValue);
  }

  handleSearch = () => {
    this.props.handleSearch(this.state.searchValue);
  };

  handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({ searchValue: event.target.value });
    if (!event.target.value) {
      this.props.handleSearch(event.target.value);
    }
  };

  render() {
    return (
      <div className="max-w-2xl my-10 mx-auto p-5">
        <div className="container flex self-center justify-self-center w-auto max-w-none shadow-md">
          <input
            className="grow py-3 px-6 rounded-l-md border-2 border-indigo-300"
            type="search"
            id="search"
            value={this.state.searchValue}
            onChange={this.handleChange}
          />
          <button
            aria-label="search"
            className="py-3 px-6 bg-indigo-600 hover:bg-indigo-700 rounded-r-md text-white"
            onClick={this.handleSearch}
          >
            {SEARCH_BUTTON_TITLE}
          </button>
        </div>
      </div>
    );
  }
}

export default SearchBox;
