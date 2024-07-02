export const CITIES = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];

export const OFFER_GALLERY_IMAGES = [
  'img/room.jpg',
  'img/apartment-01.jpg',
  'img/apartment-02.jpg',
  'img/apartment-03.jpg',
  'img/studio-01.jpg',
  'img/apartment-01.jpg'
];

export enum AppRoute {
  Root = '/',
  Offer = '/offer',
  Favorites = '/favorites',
  Login = '/login'
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}
