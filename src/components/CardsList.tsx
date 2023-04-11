import React, { PropsWithChildren, useState } from 'react';
import Card from './Card';
import { User } from '../types/User';
import UserCard from './UserCard';
import { Photo } from '../types/Photo';
import Modal from './Modal';
import DetailsCard from './DetailsCard';

type CardsListProps<T> = {
  items: T[] | [];
};

export const NO_DATA_MESSAGE = 'No Data to display \\_(^;^)_/';

function isPhoto(arg: Photo | User): arg is Photo {
  return 'alt_description' in arg;
}

const CardsList = <T extends Photo | User>({ items }: PropsWithChildren<CardsListProps<T>>) => {
  const [showDetailsModal, setShowDetailsModal] = useState<boolean>(false);
  const [detailsId, setDetailsId] = useState<string | null>(null);
  const handleCardDetails = (photo: Photo) => {
    setShowDetailsModal(true);
    setDetailsId(photo.id);
  };

  const hideDetailsModal = () => {
    setShowDetailsModal(false);
  };

  return (
    <>
      <div className="flex flex-wrap gap-10 justify-center pb-5 md:pb-10">
        {items.length === 0 ? (
          <h2 className="text-5xl font-bold text-center">{NO_DATA_MESSAGE}</h2>
        ) : (
          items.map((item: T, index) =>
            isPhoto(item) ? (
              <Card key={item.id} item={item} handleCardDetails={handleCardDetails} />
            ) : (
              <UserCard key={index} item={item} />
            )
          )
        )}
      </div>
      <Modal onClose={hideDetailsModal} show={showDetailsModal}>
        <DetailsCard id={detailsId} handleClose={hideDetailsModal} />
      </Modal>
    </>
  );
};

export default CardsList;
