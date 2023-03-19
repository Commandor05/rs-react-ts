import React, { Component } from 'react';
import CardsList from '../components/CardsList';
import SearchBox from '../components/SearchBox';
import GeneralLayout from '../layouts/GeneralLayout';
import productsData from '../data/products';
import { Product } from '../types/Product';

type HomeProps = unknown;

type HomeState = {
  findProducts: Product[] | [];
};

class Home extends Component<HomeProps, HomeState> {
  state: HomeState = { findProducts: productsData };
  handleSearch = (queryString: string) => {
    console.log('query', queryString);
    if (!queryString) {
      this.setState(() => ({ findProducts: productsData }));
    } else {
      this.setState(() => ({
        findProducts: productsData.filter((product) =>
          product.title.toUpperCase().includes(queryString.toUpperCase())
        ),
      }));
    }
  };

  render() {
    return (
      <GeneralLayout>
        <section className="flex flex-col">
          <SearchBox handleSearch={this.handleSearch} />
          <CardsList items={this.state.findProducts} />
        </section>
      </GeneralLayout>
    );
  }
}

export default Home;
