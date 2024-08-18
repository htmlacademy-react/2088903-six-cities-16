import {State} from '../index.ts';
import {AuthorizationStatusModel, NameSpace} from '../../const/const.ts';

export const getAuthorizationStatus = (state: State): AuthorizationStatusModel => state[NameSpace.User].authorizationStatus;

export const getUserName = (state: State): string => state[NameSpace.User].userName;
