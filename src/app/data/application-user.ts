import {Role} from './role';

export class ApplicationUser {
  public id: number;
  public username: string;
  public password: string;
  public roles: Role[];

  constructor(id: number, username: string, password: string, roles: Role[]) {
    this.id = id;
    this.username = username;
    this.password = password;
    this.roles = roles;
  }
}
