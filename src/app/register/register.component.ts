import { Component, OnInit } from '@angular/core';
import { DataService } from 'app/data.service';
import { Router } from '@angular/router/src/router';
import { User } from 'app/models/user';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: [
    '../../../node_modules/bootstrap/dist/css/bootstrap.css'
  ]
})
export class RegisterComponent implements OnInit {
  private username;
  private password;
  private firstname;
  private lastname;

  constructor(private userservice: DataService,
              private router : Router) { }

  register():void{
    alert("Registration successfull");
    this.userservice.Register(new User( this.firstname,this.lastname,this.username,this.password));
    this.router.navigate(['/login']);
  }
  ngOnInit() {
  }

}
