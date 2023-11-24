import { Component } from '@angular/core';
import { User } from 'src/models/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent {
  emailInput: string = "";
  urlInput: string = "";
  nameInput: string = "";
  surnameInput: string = "";
  user: User[] = [];
  enviarInputs(){
    let user1 = new User(this.nameInput, this.surnameInput, this.emailInput, this.urlInput);
    this.user = [];
    this.user.push(user1);
    console.log(this.nameInput);
  }
}