import {ApplicationUser} from './application-user';

export class Role {
  public id: number;
  public name: string;
  public applicationUsers: ApplicationUser[];

  constructor(id: number, name: string, applicationUsers: ApplicationUser[]) {
    this.id = id;
    this.name = name;
    this.applicationUsers = applicationUsers;
  }
}
