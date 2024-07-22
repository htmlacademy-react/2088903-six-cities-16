import {createAction} from '@reduxjs/toolkit';

export const selectCity = createAction('main/selectCity', (value) => ({
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  payload: value,
}));
