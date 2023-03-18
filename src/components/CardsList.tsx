import React, { Component } from 'react';
import Card from './Card';
import { Product } from '../types/Product';

type CardsListProps = {
  items: Product[] | [];
};

class CardsList extends Component<CardsListProps> {
  render() {
    const items = this.props.items;
    if (items.length === 0) {
      return <h2>No Data to display</h2>;
    }
    return (
      <>
        {items.map((item: Product) => (
          <Card key={item.id} item={item} />
        ))}
      </>
    );
  }
}

export default CardsList;
