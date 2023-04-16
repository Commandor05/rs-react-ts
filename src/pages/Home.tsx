import React, { useEffect, useState } from 'react';
import CardsList from '../components/CardsList';
import SearchBox from '../components/SearchBox';
import { useAppSelector } from '../redux/hooks';
import { Photo } from '../types/Photo';
import Spinner from '../components/Spinner';
import Modal from '../components/Modal';

const Home: React.FC = () => {
  const { isLoading, data, error } = useAppSelector((state) => state.photos);
  const [showErrorModal, setShowErrorModal] = useState<boolean>(Boolean(error));

  const hideErrorModal = () => {
    setShowErrorModal(false);
  };

  useEffect(() => {
    setShowErrorModal(Boolean(error));
  }, [error]);

  return (
    <section className="flex flex-col" data-testid="home-page-content">
      <SearchBox />
      {data && !isLoading && !error && <CardsList<Photo> items={data} />}
      {isLoading && (
        <div className="mt-20">
          <Spinner />
        </div>
      )}

      <Modal onClose={hideErrorModal} show={showErrorModal}>
        <div className="w-max h-max bg-slate-300 rounded-md border-indigo-600 border-2 shadow-md">
          <div>
            <h2 className="text-4xl text-center align-middle p-11 text-red-600">{error}</h2>
          </div>
        </div>
      </Modal>
    </section>
  );
};

export default Home;
