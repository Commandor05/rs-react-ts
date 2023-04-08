import React from 'react';
import { Photo } from '../types/Photo';

type CardsProps = {
  item: Photo;
};

const Card: React.FC<CardsProps> = ({ item }) => {
  const { alt_description, user, urls } = item;
  const title = alt_description.charAt(0).toUpperCase() + alt_description.slice(1);
  return (
    <div
      className="flex flex-col gap-2 
        rounded-md border-indigo-600 border-2 
        shadow-md hover:shadow-2xl bg-slate-100  w-64 sm:w-80 py-3 text-lg"
    >
      <h3 className="justify-self-center self-center text-xl font-bold text-center">{title}</h3>
      <img
        className="h-52 justify-self-center self-center"
        src={urls.thumb}
        alt={alt_description}
      />
      <div className="mx-3 self-end text-rose-900">
        <span>User: </span>
        {user.name}
      </div>
    </div>
  );
};

export default Card;
