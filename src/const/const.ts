export const CITIES = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'] as const;

export type SixCitiesModel = (typeof CITIES)[number];

export const AppRoute = {
  Root: '/',
  Offer: '/offer/:id',
  Favorites: '/favorites',
  Login: '/login',
  NotFound: '/404',
} as const;

export type AppRouteModel = typeof AppRoute[keyof typeof AppRoute];

export const AuthorizationStatus = {
  Auth: 'AUTH',
  NoAuth: 'NO_AUTH',
  Unknown: 'UNKNOWN',
} as const;

export type AuthorizationStatusModel = typeof AuthorizationStatus[keyof typeof AuthorizationStatus];

export const Endpoint = {
  Offers: '/offers',
  Favorite: '/favorite',
  Reviews: '/comments',
  Login: '/login',
  Logout: '/logout',
} as const;

export enum NameSpace {
  Offer = 'OFFER',
  Favorite = 'FAVORITE',
  User = 'USER',
  Review = 'REVIEW',
}
