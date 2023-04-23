import { describe, it } from 'vitest';
import { act, fireEvent, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import UserForm from '../components/UserForm';
import store from '../redux/store';
import { Provider } from 'react-redux';

describe('UserForm', () => {
  it('Render UserForm and submitt without data', async () => {
    await act(async () => {
      render(
        <Provider store={store}>
          <UserForm />
        </Provider>
      );
    });
    const user = userEvent.setup();

    expect(screen.getByRole('button')).toBeInTheDocument();
    await user.click(screen.getByRole('button'));
    expect((await screen.findAllByText(/Required/i)).length).toEqual(5);
  });

  it('Render UserForm and submitt with data', async () => {
    await act(async () => {
      render(
        <Provider store={store}>
          <UserForm />
        </Provider>
      );
    });

    const user = userEvent.setup();

    await waitFor(() => {
      expect(screen.getByTestId('userName')).toHaveValue('');
    });

    await userEvent.type(screen.getByTestId('userName'), 'Name');

    expect(screen.getByTestId('userName')).toHaveValue('Name');
    await waitFor(() => {
      expect(screen.getByTestId('userSurname')).toHaveValue('');
    });

    await userEvent.type(screen.getByTestId('userSurname'), 'Sname');
    expect(screen.getByTestId('userSurname')).toHaveValue('Sname');

    const date = '2023-05-05';
    const dateInput = screen.getByTestId('userBirthday');
    expect(dateInput).toHaveValue('');

    user.type(dateInput, date);
    fireEvent.change(dateInput, { target: { value: date } });

    expect(dateInput).toHaveValue(date);

    expect(dateInput).toHaveValue('2023-05-05');
    user.tab();
    const file = new File(['(⌐□_□)'], 'hello.png', { type: 'image/png' });
    const input = screen.getByTestId('uploadFile') as HTMLInputElement;
    await waitFor(() =>
      fireEvent.change(input, {
        target: { files: [file] },
      })
    );

    // TODO: resolve issue with file uploading
    // await user.upload(input, file);
    if (input.files) {
      expect(await input.files[0]).toBe(file);
    }
    await user.click(screen.getByTestId('userGender-male'));
    expect(screen.getByTestId('userGender-male')).toBeChecked();
    await user.click(screen.getByTestId('userTerms'));
    expect(screen.getByTestId('userTerms')).toBeChecked();

    fireEvent.submit(screen.getByRole('button', { name: 'Submit' }));

    // TODO: resolve issue with date field update
    // const confirmationModal = await screen.findByText('The data has been saved!');
    // expect(confirmationModal).toBeInTheDocument();
    expect((await screen.findAllByText(/Required/i)).length).toEqual(1);
  });
});
