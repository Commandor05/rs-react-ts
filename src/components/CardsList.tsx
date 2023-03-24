import React, { Component } from 'react';
import Card from './Card';
import { Product } from '../types/Product';
import { User } from '../types/User';
import UserCard from './UserCard';

type CardsListProps<T> = {
  items: T[] | [];
};

export const NO_DATA_MESSAGE = 'No Data to display \\_(^;^)_/';

function isProduct(arg: Product | User): arg is Product {
  return 'brand' in arg;
}

class CardsList<T extends Product | User> extends Component<CardsListProps<T>> {
  render() {
    const items = this.props.items;
    return (
      <div className="flex flex-wrap gap-10 justify-center pb-5 md:pb-10">
        {items.length === 0 ? (
          <h2 className="text-5xl font-bold text-center">{NO_DATA_MESSAGE}</h2>
        ) : (
          items.map((item: T) =>
            isProduct(item) ? (
              <Card key={item.id} item={item} />
            ) : (
              <UserCard key={`${item.name}+${item.surname}`} item={item} />
            )
          )
        )}
      </div>
    );
  }
}

export default CardsList;
