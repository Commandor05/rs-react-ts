import React, { Component } from 'react';
import CardsList from '../components/CardsList';
import SearchBox from '../components/SearchBox';
import productsData from '../data/products';
import { Product } from '../types/Product';

type HomeProps = unknown;

type HomeState = {
  findProducts: Product[] | [];
};

class Home extends Component<HomeProps, HomeState> {
  state: HomeState = { findProducts: productsData };
  handleSearch = (queryString: string) => {
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
      <section className="flex flex-col" data-testid="home-page-content">
        <SearchBox handleSearch={this.handleSearch} />
        <CardsList<Product> items={this.state.findProducts} />
      </section>
    );
  }
}

export default Home;
