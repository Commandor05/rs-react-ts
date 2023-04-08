import React from 'react';
import { Photo } from '../types/Photo';
import { FaRegTimesCircle, FaRegThumbsUp, FaLink, FaFileDownload } from 'react-icons/fa';

type DetailsCardProps = {
  item: Photo | null;
  handleClose: () => void;
};

const DetailsCard: React.FC<DetailsCardProps> = ({ item, handleClose }) => {
  let content = <h2 className="text-2xl">No data to display</h2>;

  if (item) {
    const { likes, width, height, urls, alt_description, user, links } = item;
    const title = alt_description || 'No description';
    content = (
      <>
        <h3 className="justify-self-center self-center text-xl font-bold text-center my-2 capitalize">
          {title}
        </h3>
        <img className="justify-self-center self-center" src={urls.small} alt={alt_description} />
        <div className="flex items-center m-3 gap-1">
          <p className="text-sm accent-border">W: {width}</p>
          <p className="text-sm accent-border">H: {height}</p>
          <div className="flex items-center m-3 gap-1 accent-border">
            <p className="text-xl">{likes || 0}</p>
            <FaRegThumbsUp />
          </div>
          <a href={links.download} target="_blank" rel="noreferrer">
            <div className="flex items-center gap-1 text-indigo-800 hover:scale-110 transition-all">
              <p>Download </p>
              <FaFileDownload title="Download" />
            </div>
          </a>
        </div>

        <div className="mx-3 self-center text-rose-900 accent-border border-amber-600 mb-4 p-3 justify-center">
          <p>
            <span>By: </span>
            {user.name}
          </p>
          <p>
            <span>Total Photos: </span>
            {user.total_photos}
          </p>
          {user.portfolio_url && (
            <div className="flex justify-center">
              <a href={user.portfolio_url} target="_blank" rel="noreferrer">
                <div className="flex items-center gap-1 text-indigo-800 hover:scale-110 transition-all">
                  <p>Portfolio </p>
                  <FaLink title="Portfolio link" />
                </div>
              </a>
            </div>
          )}
        </div>
      </>
    );
  }

  return (
    <div className="max-w-md h-max bg-slate-300 rounded-md border-indigo-600 border-2 drop-shadow-md">
      <FaRegTimesCircle
        title="Close"
        className="cursor-pointer drop-shadow h-5 w-5 m-2 float-right hover:scale-110 transition-all"
        onClick={handleClose}
      />
      <div className="container flex flex-col">{content}</div>
    </div>
  );
};

export default DetailsCard;
