import {AuthorizationStatusModel} from '../../const/const.ts';

export type UserProcessModel = {
  authorizationStatus: AuthorizationStatusModel;
  userName: string;
};
