import React, { Suspense, useEffect, useMemo, useState } from 'react';
import CardsList from '../components/CardsList';
import SearchBox from '../components/SearchBox';
import { useAppSelector } from '../redux/hooks';
import { Photo } from '../types/Photo';
import Spinner from '../components/Spinner';
import Modal from '../components/Modal';
import { useFetchPhotosQuery, useFetchSearchPhotosQuery } from '../redux/features/photo/photoSlice';
import { potosEndpoint } from '../App';

const Home: React.FC = () => {
  const searchQueryApplied = useAppSelector((state) => state.search.searchQueryApplied);
  const {
    data: searchData,
    isFetching: isSearchFetching,
    isError: isSearchError,
  } = useFetchSearchPhotosQuery(searchQueryApplied);
  const {
    data: initialData,
    isFetching: isInitialFetching,
    isError: isInitialError,
  } = useFetchPhotosQuery(potosEndpoint);

  const errorMessage = 'Something went wrong! Data fetching error.';
  const hideErrorModal = () => {
    setShowErrorModal(false);
  };

  const { data, isLoading, isError } = useMemo(() => {
    let data = initialData;
    let isLoading = isInitialFetching;
    let isError = isInitialError;
    if (Boolean(searchQueryApplied)) {
      data =
        searchData && searchData.results && searchData.results.length > 0 ? searchData.results : [];
      isLoading = isSearchFetching;
      isError = isSearchError;
    }

    return { data, isLoading, isError };
  }, [
    searchData,
    isSearchFetching,
    isSearchError,
    initialData,
    isInitialFetching,
    isInitialError,
    searchQueryApplied,
  ]);
  const [showErrorModal, setShowErrorModal] = useState<boolean>(Boolean(isError));

  useEffect(() => {
    setShowErrorModal(Boolean(isError));
  }, [isError]);

  return (
    <section className="flex flex-col" data-testid="home-page-content">
      <SearchBox />
      <Suspense
        fallback={
          <div className="mt-20">
            <Spinner />
          </div>
        }
      >
        {data && !isLoading && !isError && <CardsList<Photo> items={data} />}
        {isLoading && (
          <div className="mt-20">
            <Spinner />
          </div>
        )}
      </Suspense>

      <Modal onClose={hideErrorModal} show={showErrorModal}>
        <div className="w-max h-max bg-slate-300 rounded-md border-indigo-600 border-2 shadow-md">
          <div>
            <h2 className="text-4xl text-center align-middle p-11 text-red-600">{errorMessage}</h2>
          </div>
        </div>
      </Modal>
    </section>
  );
};

export default Home;
