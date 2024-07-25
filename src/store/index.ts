import {configureStore} from '@reduxjs/toolkit';
import {reducer} from './reducer';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import {createAPI} from '../services/api.ts';
import {checkAuthAction, fetchOffersAction} from './api-actions.ts';

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const api = createAPI();

export const useAppDispatch = () => useDispatch<AppDispatch>();

export const useAppSelector: TypedUseSelectorHook<State> = useSelector;

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }),
});

store.dispatch(fetchOffersAction());
store.dispatch(checkAuthAction());
