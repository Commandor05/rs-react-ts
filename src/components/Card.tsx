import React from 'react';
import { Photo } from '../types/Photo';

type CardsProps = {
  item: Photo;
  handleCardDetails: (photo: Photo) => void;
};

const Card: React.FC<CardsProps> = ({ item, handleCardDetails }) => {
  const { alt_description, user, urls } = item;
  const title = alt_description || 'No description';
  return (
    <div
      className="flex flex-col gap-2 
        rounded-md border-indigo-600 border-2 
        shadow-md hover:shadow-2xl bg-slate-100  w-64 sm:w-80 py-3 text-lg"
      onClick={() => handleCardDetails(item)}
    >
      <h3 className="justify-self-center self-center text-xl font-bold text-center capitalize">
        {title}
      </h3>
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
