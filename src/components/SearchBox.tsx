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
      <div>
        <input
          type="search"
          id="search"
          value={this.state.searchValue}
          onChange={this.handleChange}
        />
        <button aria-label="search" onClick={this.handleSearch}>
          {SEARCH_BUTTON_TITLE}
        </button>
      </div>
    );
  }
}

export default SearchBox;
