import {ApplicationUser} from './application-user';
import {Category} from './category';

export class Entry {
  public id: number;
  public checkIn: Date;
  public checkOut: Date;
  public confirmed: boolean;
  public applicationUser: ApplicationUser;
  public category: Category;


  constructor(id: number, checkIn: Date, checkOut: Date, confirmed: boolean, applicationUser: ApplicationUser, category: Category) {
    this.id = id;
    this.checkIn = checkIn;
    this.checkOut = checkOut;
    this.confirmed = confirmed;
    this.applicationUser = applicationUser;
    this.category = category;
  }
}
