import {createAction} from '@reduxjs/toolkit';

export const selectCity = createAction('main/selectCity', (value) => ({
  payload: value,
}));
