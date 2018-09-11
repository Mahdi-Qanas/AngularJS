import { Component, OnInit } from '@angular/core';
import { DataService } from 'app/data.service';
import { User } from 'app/models/user';
import { Router } from '@angular/router/src/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: [
    '../../../node_modules/bootstrap/dist/css/bootstrap.css'
  ]
})
export class HomeComponent implements OnInit {
  private user: User;
  constructor(private userservice: DataService,
              private router: Router) { }

  ngOnInit() {
    this.user=this.userservice.getData();
  }
  logout():void{
    this.router.navigate(['/login']);
  }

}
