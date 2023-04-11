import { Component } from '@angular/core';
import { UserEntity } from '../user-entity';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  user:UserEntity=new UserEntity();

  constructor(private userService:UserServiceService){}
  OnSubmit()
  {
    
    console.log(this.user);
      this.userService.addUser(this.user).subscribe(data=>
        {
          console.log(data);
          alert("registeration successfull");
        },
        (error:any)=>console.log(error));
  }
}
