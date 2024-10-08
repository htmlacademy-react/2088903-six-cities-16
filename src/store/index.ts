import {configureStore} from '@reduxjs/toolkit';
import {rootReducer} from './root-reducer.ts';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import {createAPI} from '../services/api.ts';

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const api = createAPI();

export const useAppDispatch = () => useDispatch<AppDispatch>();

export const useAppSelector: TypedUseSelectorHook<State> = useSelector;

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }),
});
