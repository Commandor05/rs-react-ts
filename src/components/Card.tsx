import React, { Component } from 'react';
import { Product } from '../types/Product';

type CardsProps = {
  item: Product;
};

class Card extends Component<CardsProps> {
  render() {
    const { title, description, price, discountPercentage, rating, brand, category, thumbnail } =
      this.props.item;
    console.log(description, price, discountPercentage, rating, brand, category, thumbnail);
    return <div>{title}</div>;
  }
}

export default Card;
