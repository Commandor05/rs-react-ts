import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { User } from '../types/User';

import UserCard from '../components/UserCard';

const user = {
  userName: 'userName',
  userSurname: 'userSurname',
  userBirthday: '2023-03-03',
  userCountry: 'userCountry',
  userGender: 'male',
  userTerms: true,
  userPromotions: true,
} as User;

describe('UserCard', () => {
  it('Render UserCard from title', () => {
    render(<UserCard item={user} />);
    expect(screen.getByRole('heading', { level: 3 })).toHaveTextContent(
      `${user.userName} ${user.userSurname}`
    );
  });

  it('Render Cards from description', () => {
    render(<UserCard item={user} />);
    expect(screen.getByAltText('Avatar')).toBeInTheDocument();
  });
});
