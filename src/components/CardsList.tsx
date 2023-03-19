import React, { Component } from 'react';
import Card from './Card';
import { Product } from '../types/Product';

type CardsListProps = {
  items: Product[] | [];
};

class CardsList extends Component<CardsListProps> {
  render() {
    const items = this.props.items;
    return (
      <div className="flex flex-wrap gap-10 justify-center pb-5 md:pb-10">
        {items.length === 0 ? (
          <h2 className="text-5xl font-bold text-center">No Data to display \_(^;^)_/</h2>
        ) : (
          items.map((item: Product) => <Card key={item.id} item={item} />)
        )}
      </div>
    );
  }
}

export default CardsList;
