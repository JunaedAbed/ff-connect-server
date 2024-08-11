export class User {
  userId: number;
  username: string;
  password: string;

  constructor(partial: Partial<User>) {
    Object.assign(this, partial);
  }
}
