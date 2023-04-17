import React from 'react';
import { User } from '../types/User';
import avatar from '../assets/ava.png';
import { FaCheck, FaEnvelope } from 'react-icons/fa';

type UserCardsProps = {
  item: User;
};

const UserCard: React.FC<UserCardsProps> = ({ item }) => {
  const {
    userName,
    userSurname,
    userBirthday,
    userCountry,
    userGender,
    userTerms,
    userPromotions,
    userAvatar,
  } = item;
  return (
    <div
      className="flex flex-col gap-2 
        rounded-md border-indigo-600 border-2 
        shadow-md hover:shadow-2xl bg-slate-100  w-64 sm:w-80 p-3 text-lg"
    >
      <img
        className="w-24 h-24 justify-self-center self-center rounded-full"
        src={userAvatar ? userAvatar : avatar}
        alt="Avatar"
      />
      <div>
        <h3 className="justify-self-center self-center text-xl font-bold text-center">
          {userName} {userSurname}
        </h3>
        <p className="justify-self-center self-center text-xl font-bold text-center">
          Birthday: {userBirthday}
        </p>
        <p className="justify-self-center self-center text-xl font-bold text-center">
          Location: {userCountry}
        </p>
        <p className="justify-self-center self-center text-xl font-bold text-center">
          Gender: {userGender}
        </p>
        <div className="flex justify-center gap-1">
          {userTerms && <FaCheck title="Accept all tetms and conditions" />}
          {userPromotions && <FaEnvelope title="Cnsent to receive information about promotions" />}
        </div>
      </div>
    </div>
  );
};

export default UserCard;
