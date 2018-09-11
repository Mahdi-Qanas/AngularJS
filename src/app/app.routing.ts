import { Routes, RouterModule } from '@angular/router';


import { LoginComponent } from './login/index';
import { RegisterComponent } from 'app/register/register.component';
import { HomeComponent } from 'app/home/home.component';


const appRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent},
    { path: 'home' , component: HomeComponent},
    // otherwise redirect to home
    { path: '**', redirectTo: 'login' }
];

export const routing = RouterModule.forRoot(appRoutes);