import { Injectable } from '@angular/core';
import { User } from 'app/models/user';
import { Observable } from 'rxjs';

@Injectable()
export class DataService {
  data : User;
  constructor() { }

  Register(x:User):void{
    this.data=x;
  }
  getData(): User{
    return this.data;
  }
}
