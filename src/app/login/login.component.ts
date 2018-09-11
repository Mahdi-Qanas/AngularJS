import { Component, OnInit } from '@angular/core';
import { DataService } from 'app/data.service';
import { User } from 'app/models/user';
import { Router } from '@angular/router/src/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: [
    '../../../node_modules/bootstrap/dist/css/bootstrap.css'
  ]
})
export class LoginComponent implements OnInit {
  private username;
	private password;
  private user: User;
  constructor(private userservice: DataService,
              private router: Router) { }

	login():void{
    this.user=this.userservice.getData();
    if(this.user == undefined || this.user.username!=this.username || this.user.password!=this.password){
      alert("wrong username or password");
    }
    else{
      this.router.navigate(['/home']);
    }
	}
  

  ngOnInit() {
  }

}
