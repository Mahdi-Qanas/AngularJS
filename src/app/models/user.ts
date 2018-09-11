export class User {
    username: string;
    password: string;
    firstName: string;
    lastName: string;
    constructor(f:string,l:string,u:string,p:string){
        this.firstName=f;
        this.lastName=l;
        this.username=u;
        this.password=p;
    }
}