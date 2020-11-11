import React from 'react';
import { render } from 'react-native-testing-library';

import SigIn from '../../pages/SignIn';

const mockedNavigation = jest.fn();

jest.mock('@react-navigation/native', () => {
  return {
    useNavigation: () => ({
      navigate: mockedNavigation,
    }),
  };
});

describe('SigIn page', () => {
  it('should contains email/password inputs', () => {
    const { getByPlaceholder } = render(<SigIn />);
    expect(getByPlaceholder('E-mail')).toBeTruthy();
    expect(getByPlaceholder('Senha')).toBeTruthy();
  });
});
