import React, { useState } from 'react';
import CardsList from '../components/CardsList';
import SearchBox from '../components/SearchBox';
import productsData from '../data/products';
import { Product } from '../types/Product';

type FindProductsState = Product[] | [];

const Home: React.FC = () => {
  const [findProducts, setFindProducts] = useState<FindProductsState>(productsData);
  const handleSearch = (queryString: string) => {
    if (!queryString) {
      setFindProducts(productsData);
    } else {
      setFindProducts(
        productsData.filter((product) =>
          product.title.toUpperCase().includes(queryString.toUpperCase())
        )
      );
    }
  };

  return (
    <section className="flex flex-col" data-testid="home-page-content">
      <SearchBox handleSearch={handleSearch} />
      <CardsList<Product> items={findProducts} />
    </section>
  );
};

export default Home;
