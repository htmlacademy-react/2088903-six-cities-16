export type UserModel = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
}

export type FullUserModel = UserModel & {
  email: string;
  token: string;
};
