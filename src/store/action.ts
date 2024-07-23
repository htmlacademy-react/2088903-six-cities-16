import {createAction} from '@reduxjs/toolkit';
import {TCities} from '../const/const.ts';

export const selectCity = createAction('main/selectCity', (value: TCities) => ({
  payload: value,
}));
