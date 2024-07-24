import {createAction} from '@reduxjs/toolkit';
import {SixCitiesModel} from '../const/const.ts';

export const selectCity = createAction('main/selectCity', (value: SixCitiesModel) => ({
  payload: value,
}));
