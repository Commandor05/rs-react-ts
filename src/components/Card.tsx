import React, { Component } from 'react';
import { Product } from '../types/Product';

type CardsProps = {
  item: Product;
};

class Card extends Component<CardsProps> {
  render() {
    const { title, description, price, discountPercentage, brand, thumbnail } = this.props.item;
    return (
      <div
        className="flex flex-col gap-2 
        rounded-md border-indigo-600 border-2 
        shadow-md hover:shadow-2xl bg-slate-100  w-64 sm:w-80 py-3 text-lg"
      >
        <h3 className="justify-self-center self-center text-xl font-bold text-center">{title}</h3>
        <img
          className="h-52 justify-self-center self-center"
          src={thumbnail}
          alt={`${title} image`}
        />
        <div className="mx-3 self-end text-rose-900">
          <span>Brand: </span>
          {brand}
        </div>
        <div className="mx-3 leading-7 bg-slate-50 p-3 rounded-md">{description}</div>
        <div className="mx-3 self-end text-purple-700">
          <span>Discount: </span>
          {discountPercentage}%
        </div>
        <div className="mx-3 text-xl font-semibold">
          <span>Price: </span>
          {price}$
        </div>
      </div>
    );
  }
}

export default Card;
