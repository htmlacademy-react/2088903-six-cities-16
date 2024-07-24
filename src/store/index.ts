import {configureStore} from '@reduxjs/toolkit';
import {reducer} from './reducer';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';

export type TState = ReturnType<typeof store.getState>;

export type TAppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<TAppDispatch>();

export const useAppSelector: TypedUseSelectorHook<TState> = useSelector;

export const store = configureStore({reducer});
